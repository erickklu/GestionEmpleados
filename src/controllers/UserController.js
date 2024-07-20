const bcrypt = require('bcrypt');
const db = require("../db/models")
const model = require("../db/models/user")(db.sequelize, db.Sequelize)

module.exports.CreateUser = async (data) => {
    const res = await model.create({
        name: data.name,
        username: data.username,
        password: data.password,
    });
    return res;
};

module.exports.FindUserByEmail = async (data) => {
    let user = await model.findAll({
        where: {
            username: data.username
        }
    });

    if (user.length > 0) {
        let pass = await bcrypt.compare(data.password, user[0].password)

        console.log(pass);
        return pass;
    }
    return false;
}