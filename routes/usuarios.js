const { Router } = require('express');
const route = Router();

// Importa métodos del controlador
const {AmbienteGet, AmbientePost} = require('../controllers/usuario');

route.get('/', AmbienteGet);
route.post('/', AmbientePost);
route.delete('/', (req, res) => {
  res.json({
    msg: 'API DELETE'
  });
});
route.put('/', (req, res) => {
  res.json({
    msg: 'API PUT'
  });
});

module.exports = route;
