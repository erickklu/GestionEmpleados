const express = require('express');
const router = express.Router();
const DepartamentoController = require("../controllers/Departamento")

router.get("/", async (req, res) => {
    try {
        const departamentos = (await DepartamentoController.GetDepartamentos());
        res.status(200).send(departamentos);
        /* res.send(departamentos) */
    } catch (err) {
        res.status(500).send(err);
    }

});

router.post("/", async (req, res) => {
    try {
        const nuevoDepartamento = await DepartamentoController.CreateDepartamento(req.body);
        res.status(201).send(nuevoDepartamento);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await DepartamentoController.DeleteDepartamento(id);
        if (result === 0) {
            return res.status(404).send({ message: 'Departamento no encontrado' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, ubicacion } = req.body;
        if (!nombre || !ubicacion) {
            return res.status(400).send({ message: 'El nombre y la ubicacion son requeridos' });
        }
        const result = await DepartamentoController.UpdateDepartamento(id, { nombre, ubicacion });
        if (result[0] === 0) {
            return res.status(404).send({ message: 'Departamento no encontrado' });
        }
        res.status(200).send({ message: 'Departamento actualizado correctamente' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router