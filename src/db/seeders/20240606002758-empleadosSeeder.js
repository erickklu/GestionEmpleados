'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Empleados', [
      {
        nombre: 'Ana', apellido: 'Pérez', cedula: '123456789', departamento: 'Recursos Humanos', puesto: 'Gerente de Recursos Humanos', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Juan', apellido: 'Martínez', cedula: '987654321', departamento: 'Ventas', puesto: 'Ejecutivo de Ventas', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'María', apellido: 'García', cedula: '456789123', departamento: 'Marketing', puesto: 'Especialista en Marketing Digital', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carlos', apellido: 'López', cedula: '789123456', departamento: 'Finanzas', puesto: 'Analista Financiero', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Javier', apellido: 'Rodríguez', cedula: '321654987', departamento: 'Tecnología de la Información', puesto: 'Ingeniero de Sistemas', createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Empleados', null, {});
  }
};
