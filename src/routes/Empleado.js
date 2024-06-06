const express = require('express');
const router = express.Router();
const EmpleadoController = require("../controllers/Empleado")

router.get("/", async (req, res) => {
    try {
        const empleados = (await EmpleadoController.GetEmpleados());
        res.status(200).send(empleados);
        /* res.send(departamentos) */
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const nuevoEmpleado = await EmpleadoController.CreateEmpleado(req.body);
        res.status(201).send(nuevoEmpleado);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await EmpleadoController.DeleteEmpleado(id);
        if (result === 0) {
            return res.status(404).send({ message: 'Empleado no encontrado' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, apellido, cedula, departamento, puesto } = req.body;
        if (!nombre || !apellido || !cedula || !departamento || !puesto) {
            return res.status(400).send({ message: 'Todos los datos son requeridos' });
        }
        const result = await EmpleadoController.UpdateEmpleado(id, { nombre, apellido, cedula, departamento, puesto });
        if (result[0] === 0) {
            return res.status(404).send({ message: 'Empleado no encontrado' });
        }
        res.status(200).send({ message: 'Empleado actualizado correctamente' });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;