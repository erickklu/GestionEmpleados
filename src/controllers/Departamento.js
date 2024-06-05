const db = require("../db/models")
const model = require("../db/models/departamento")(db.sequelize, db.Sequelize)

module.exports.GetDepartamentos = async () => {
    const response = await model.findAll();
    return response;
}