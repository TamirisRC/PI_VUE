const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.post('/users/add', professorController.createProfessor);
router.get('/users', professorController.getAllProfessor);
router.get('/users/:id', professorController.getProfessorById);
router.put('/users/edit/:id', professorController.updateProfessor);
router.delete('/users/delete/:id', professorController.deleteProfessor);

module.exports = router;