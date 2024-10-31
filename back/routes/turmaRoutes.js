const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

router.post('/turmas/add', turmaController.createTurmas);
router.get('/turmas', turmaController.getAllTurmas);
router.get('/turmas/:id', turmaController.getTurmasById);
router.put('/turmas/edit/:id', turmaController.updateTurmas);
router.delete('/turmas/delete/:id', turmaController.deleteTurmas);

module.exports = router;