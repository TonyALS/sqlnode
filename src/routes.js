const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ hello: 'Hello Word' });
})

module.exports = routes;