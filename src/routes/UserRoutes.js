const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserController = require("../controllers/UserController")
const jwt = require('jsonwebtoken');


router.post("/register", async (req, res) => {
        const { name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        let response = await UserController.CreateUser({name, username, password: hashedPassword})
        res.status(201).send(`Usuario ${name} registrado correctamente. ID: ${response.id}`);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let pass = await UserController.FindUserByEmail({username,password})

    if (pass) {
        const token = jwt.sign({ username }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1h' })
        res.json({token})
    } else {
        res.status(401).send('Usuario o contraseña incorrectos')
    }

});

module.exports = router;