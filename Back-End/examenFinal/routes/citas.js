var express = require('express');
var router = express.Router();
var citas = require('../controllers/citas.controller');
var auth = require('../controllers/auth.controller');
const cache = require('../routeCache');

/* GET home page. */
router.get('/mostrarTodas', cache(500), citas.mostrarTodas);

router.post('/agregar', citas.agregar);

router.delete('/eliminar/:id', citas.eliminar);

router.put('/modificar/:id', citas.modificar);

module.exports = router;
