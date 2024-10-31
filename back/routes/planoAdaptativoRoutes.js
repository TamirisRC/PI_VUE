const express = require('express');
const router = express.Router();
const planoAdaptativoController = require('../controllers/planoAdaptativoController');

router.post('/planos/add', planoAdaptativoController.createPlanos);
router.get('/planos', planoAdaptativoController.getAllPlanos);
router.get('/planos/:id', planoAdaptativoController.getPlanosById);
router.put('/planos/edit/:id', planoAdaptativoController.updatePlanos);
router.delete('/planos/delete/:id', planoAdaptativoController.deletePlanos);

module.exports = router;