const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserController = require("../controllers/UserController")
const jwt = require('jsonwebtoken');
const querystring = require('querystring');


router.post("/register", async (req, res) => {
    const { name, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let response = await UserController.CreateUser({ name, username, password: hashedPassword })
    res.status(201).send(`Usuario ${name} registrado correctamente. ID: ${response.id}`);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let pass = await UserController.FindUserByEmail({ username, password });

    if (pass) {
        const token = jwt.sign({ username }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
});
router.get("/login/google", (req, res) => {
    const authorizationUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        querystring.stringify({
            client_id: process.env.CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URI,
            response_type: 'code',
            scope: 'openid profile email',
        });
    res.redirect(authorizationUrl);
});

router.get("/callback", async (req, res) => {
    const { code } = req.query;

    try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            code,
            grant_type: 'authorization_code',
        });

        const { access_token, id_token } = tokenResponse.data;

        req.session.access_token = access_token;
        req.session.id_token = id_token;

        res.redirect('/auth/profile');
    } catch (error) {
        console.error('Error during authentication:', error);
        res.send('Error during authentication');
    }
});

router.get('/profile', (req, res) => {
    if (!req.session.access_token) {
        return res.redirect('/auth/login/google');
    }
    res.sendFile(path.join(__dirname, '..', 'views', 'profile.html'));
});

router.get('/profile/data', async (req, res) => {
    if (!req.session.access_token) {
        return res.status(401).json({ error: 'User not authenticated' });
    }

    try {
        const profileResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                Authorization: `Bearer ${req.session.access_token}`,
            },
        });

        res.json(profileResponse.data);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Error fetching profile' });
    }
});

module.exports = router;