'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuarios.belongsToMany(models.roles, {
        through: models.usuarios_roles,
        as: 'roles_do_usuario',
        foreignKey: 'usuario_id'
      })
      usuarios.belongsToMany(models.permissoes, {
        through: models.usuarios_permissoes,
        as: 'permissoes_do_usuario',
        foreignKey: 'usuario_id'
      })
    }
  }
  usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  });
  return usuarios;
};