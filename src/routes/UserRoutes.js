const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserController = require("../controllers/UserController")


router.post("/register", async (req, res) => {
        const { name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        let response = await UserController.CreateUser({name, username, password: hashedPassword})
        res.status(201).send(`Usuario ${name} registrado correctamente. ID: ${response.id}`);
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    let user = await UserController.FindUserByEmail({username,password})
    res.status(201).send(user)
});


module.exports = router;