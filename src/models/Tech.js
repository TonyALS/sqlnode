const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
  //  static init é padrão do Sequelize e recebe a conexão com o banco de dados:
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize: connection
    });
  }

  //  Tecnologias tem um relacionamento N:N com usuários e por isso usamos o belongsToMany:
  static associate(models) {
    this.belongsToMany(models.User, { 
      foreignKey: 'tech_id', 
      through: 'users_techs', 
      as: 'users'});
  }
}

module.exports = Tech;