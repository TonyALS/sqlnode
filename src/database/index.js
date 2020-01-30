const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

//  Faz a conexão passando a connection para o super.init dentro do model:
User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
