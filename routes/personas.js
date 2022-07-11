'use strict'

const express = require('express');
const PersonasController = require('../controllers/personas');

const router = express.Router();

router.get('/home', PersonasController.home);
router.post('/test', PersonasController.test);
router.post('/add', PersonasController.add);
router.get('/read', PersonasController.read);
router.get('/readOne/:id', PersonasController.readOne);
router.put('/update/:id', PersonasController.update);
router.delete('/remove/:id', PersonasController.remove);

module.exports = router;