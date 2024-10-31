const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.post('/alunos/add', alunoController.createAluno);
router.get('/alunos', alunoController.getAllAlunos);
router.get('/alunos/:id', alunoController.getAlunoById);
router.put('/alunos/edit/:id', alunoController.updateAluno);
router.delete('/alunos/delete/:id', alunoController.deleteAluno);

module.exports = router;