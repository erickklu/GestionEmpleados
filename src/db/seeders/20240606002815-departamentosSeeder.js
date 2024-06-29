'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Departamentos', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Departamentos', [
      {
        nombre: 'Recursos Humanos', ubicacion: 'Edificio Principal', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ventas', ubicacion: 'Planta Baja', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Marketing', ubicacion: 'Piso 2', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Finanzas', ubicacion: 'Piso 3', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tecnología de la Información', ubicacion: 'Piso 4', createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Departamentos', null, {});
  }
};
