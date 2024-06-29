'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  }
  Puesto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    salario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Puesto',
  });
  return Puesto;
};