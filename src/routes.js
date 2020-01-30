const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

// Continuar do minuto: 1h14
// https://www.youtube.com/watch?v=Fbu7z5dXcRs&list=WL&index=64&t=0s

module.exports = routes;