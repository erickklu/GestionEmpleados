const db = require("../db/models")
const model = require("../db/models/empleado")(db.sequelize, db.Sequelize)

module.exports.GetEmpleados = async () => {
    const response = await model.findAll();
    return response;
}

module.exports.CreateEmpleado = async (data) => {
    const response = await db.Empleado.create(data);
    return response;
};


module.exports.DeleteEmpleado = async (id) => {
    const response = await db.Empleado.destroy({
        where: { id }
    });
    return response;
};

module.exports.UpdateEmpleado = async (id, data) => {
    const response = await db.Empleado.update(
        {
            nombre: data.nombre,
            apellido: data.apellido,
            cedula: data.cedula,
            departamento: data.departamento,
            puesto: data.puesto
        },
        {
            where: { id }
        }
    );
    return response;
}; 