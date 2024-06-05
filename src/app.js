require('dotenv').config();

const express = require("express")
const port = process.env.APP_PORT;
const app = express()
const routes = require('./routes');

app.use(express.json());
app.use("/departamentos", routes.DepartamentoRoutes)

app.listen(port, () => {
    console.log("Server Online", port)
})

module.exports = app;