'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Puestos', [
      { nombre: 'Gerente de Recursos Humanos', descripcion: 'Encargado de liderar el departamento de RRHH', salario: 90000, createdAt: new Date(),
      updatedAt: new Date() },
      { nombre: 'Ejecutivo de Ventas', descripcion: 'Encargado de ventas y atención al cliente', salario: 50000, createdAt: new Date(),
      updatedAt: new Date() },
      { nombre: 'Especialista en Marketing Digital', descripcion: 'Encargado de estrategias de marketing online', salario: 65000, createdAt: new Date(),
      updatedAt: new Date() },
      { nombre: 'Analista Financiero', descripcion: 'Encargado de análisis y reportes financieros', salario: 75000, createdAt: new Date(),
      updatedAt: new Date() },
      { nombre: 'Ingeniero de Sistemas', descripcion: 'Encargado del desarrollo y mantenimiento de sistemas', salario: 85000, createdAt: new Date(),
      updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Puestos', null, {});
  }
};
