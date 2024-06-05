/* const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'empleados',
    username: 'postgres',
    password: '123456'
  });


const Empleados = sequelize.define("empleados",{
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    puesto: DataTypes.STRING
}, {
    tableName: 'empleados'
})

Empleados.sync();
module.exports.Empleados = Empleados; */