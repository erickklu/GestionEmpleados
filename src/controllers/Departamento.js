const db = require("../db/models")
const model = require("../db/models/departamento")(db.sequelize, db.Sequelize)

module.exports.GetDepartamentos = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreateDepartamento = async (data) => {
    const response = await db.Departamento.create(data);
    return response;
};

module.exports.DeleteDepartamento = async (id) => {
    const response = await db.Departamento.destroy({
        where: { id }
    });
    return response;
};

module.exports.UpdateDepartamento = async (id, data) => {
    const response = await db.Departamento.update(
        {
            nombre: data.nombre,
            ubicacion: data.ubicacion
        },
        {
            where: { id }
        }
    );
    return response;
};