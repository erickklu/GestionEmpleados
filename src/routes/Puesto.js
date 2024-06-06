const express = require('express');
const router = express.Router();
const PuestoController = require("../controllers/Puesto")

router.get("/", async (req, res) => {
    try {
        const puestos = (await PuestoController.GetPuestos());
        res.status(200).send(puestos);
        /* res.send(departamentos) */
    } catch (err) {
        res.status(500).send(err);
    }

});
 
router.post("/", async (req, res) => {
    try {
        const nuevoPuesto = await PuestoController.CreatePuesto(req.body);
        res.status(201).send(nuevoPuesto);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await PuestoController.DeletePuesto(id);
        if (result === 0) {
            return res.status(404).send({ message: 'Puesto no encontrado' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, descripcion, salario } = req.body;
        if (!nombre || !descripcion || !salario) {
            return res.status(400).send({ message: 'Todos los campos son requeridos son requeridos' });
        }
        const result = await PuestoController.UpdatePuesto(id, { nombre, descripcion, salario });
        if (result[0] === 0) {
            return res.status(404).send({ message: 'Puesto no encontrado' });
        }
        res.status(200).send({ message: 'Puesto actualizado correctamente' });
    } catch (err) {
        res.status(500).send(err);
    }
}); 

module.exports = router