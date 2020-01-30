const { Model, DataTypes } = require('sequelize');

class User extends Model {
  //  static init é padrão do Sequelize e recebe a conexão com o banco de dados:
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize: connection
    });
  }

  static associate(models) {
    //  No hasMany a foreignKey é a coluna em que está armazenada a chave dentro
    //  do model que ela referencia, no caso Address tem a coluna 'user_id' 
    //  com o id do usuário.
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

module.exports = User;