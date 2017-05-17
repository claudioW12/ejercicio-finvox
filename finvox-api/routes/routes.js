'use strict'

var express = require('express');
var UnidadController = require('../controllers/unidad');
var api = express.Router();

api.get("/unidad", UnidadController.getUnidad);

module.exports = api;