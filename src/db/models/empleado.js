'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empleado.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    puesto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empleado',
  });
  return Empleado;
};