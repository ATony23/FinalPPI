var express = require('express');
var router = express.Router();
var servicios = require('../controllers/servicios.controller');
const cache = require('../routeCache');

/* GET home page. */
// router.get('/mostrarTodos', cache(500), servicios.mostrarTodos);
router.get('/mostrarTodos', cache(500), servicios.mostrarTodos);

router.get('/mostrarMedicos', cache(500), servicios.mostrarMedicos);

router.post('/agregar', servicios.agregar);

router.delete('/eliminar/:id', servicios.eliminar);

router.put('/modificar/:id', servicios.modificar);

module.exports = router;
