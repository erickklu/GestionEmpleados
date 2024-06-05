const express = require('express');
const router = express.Router();
const EmpleadoController = require("../controllers/empleadosController")

router.get("/empleados", async (req, res) => {
    const empleados = await models.Empleados.findAll();
    res.send(empleados);
});

router.post("/empleados/registro", async (req, res) => {
    try {
        const { nombre, apellido, cedula, departamento, puesto } = req.body;

        const guardarEmpleado = await models.Empleados.create({
            nombre,
            apellido,
            cedula,
            departamento,
            puesto
        });
        res.status(200).send(guardarEmpleado);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/empleados/:id", async (req, res) => {
    const empleados = await models.Empleados.findByPk(req.params.id);
    res.send(empleados.destroy());
});

router.put("/empleados/:id", async (req, res) => {
    const { nombre, apellido, cedula, departamento, puesto } = req.body;

    const actualizarEmpleados = await models.Empleados.update({
        nombre,
        apellido,
        cedula,
        departamento,
        puesto
    },
    { where: { id: req.params.id } });
    res.send(actualizarEmpleados);
});

module.exports = router;