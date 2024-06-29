'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

  }
  Departamento.init({
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departamento',
  });
  return Departamento;
};