var express = require('express');
var router = express.Router();
var doctor = require('../controllers/doctor.controller');

router.post('/agregar', doctor.agregar);

module.exports = router;