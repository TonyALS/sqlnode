const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  //  static init é padrão do Sequelize e recebe a conexão com o banco de dados:
  static init(connection) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
    }, {
      sequelize: connection
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Address;