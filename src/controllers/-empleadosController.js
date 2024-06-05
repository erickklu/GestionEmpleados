const express = require('express')
const models = require("./db/models")
const router = express.Router();


const getEmpleados =  async (req, res) => {
    const empleados = await models.Empleados.findAll();
    res.send(empleados)
}


const postRegistro = async (req, res) => {
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
}

const deleteEmpleados = async (req, res) => {
    const empleados = await models.Empleados.findByPk(req.params.id);
    res.send(empleados.destroy())
}

const putEmpleados = async (req, res) => {
    /* const empleados = await models.Empleados.findByPk(req.params.id); */
    const { nombre, apellido, cedula, departamento, puesto } = req.body;

    const actualizarEmpleados = await models.Empleados.update({
        nombre,
        apellido,
        cedula,
        departamento,
        puesto
    },
    { where: { id: req.params.id } });
    res.send(actualizarEmpleados)
}

module.exports = { getEmpleados, postRegistro, deleteEmpleados, putEmpleados };