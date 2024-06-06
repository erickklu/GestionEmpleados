const db = require("../db/models")
const model = require("../db/models/puesto")(db.sequelize, db.Sequelize)

module.exports.GetPuestos = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreatePuesto = async (data) => {
    const response = await db.Puesto.create(data);
    return response;
};


module.exports.DeletePuesto = async (id) => {
    const response = await db.Puesto.destroy({
        where: { id }
    });
    return response;
};

module.exports.UpdatePuesto = async (id, data) => {
    const response = await db.Puesto.update(
        {
            nombre: data.nombre,
            descripcion: data.descripcion,
            salario: data.salario
        },
        {
            where: { id }
        }
    );
    return response;
}; 