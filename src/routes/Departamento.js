const express = require('express');
const router = express.Router();
const DepartamentoController = require("../controllers/Departamento")

router.get("/departamentos", async (req, res) => {
    try {
        const departamentos = (await DepartamentoController.GetDepartamentos());
        res.status(200).send(departamentos);
        /* res.send(departamentos) */
    } catch (err) {
        res.status(500).send(err);
    }

});

module.exports = router