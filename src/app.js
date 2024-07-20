require('dotenv').config();

const express = require("express")
const session = require('express-session');
const path = require('path');

const port = process.env.APP_PORT;
const app = express()
const routes = require('./routes');

app.use(express.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static(path.join(__dirname, 'views')));

app.use("/departamentos", routes.DepartamentoRoutes)
app.use("/puestos", routes.PuestoRoutes)
app.use("/empleados", routes.EmpleadoRoutes)
app.use("/auth", routes.UserRoutes)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
  });

app.listen(port, () => {
    console.log("Server Online", port)
})

module.exports = app;