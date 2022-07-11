'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const PersonasController = require('../controllers/personas');

const router = express.Router();

router.get('/home', PersonasController.home);
router.post('/test', PersonasController.test);

module.exports = router;