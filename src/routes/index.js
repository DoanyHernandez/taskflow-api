const express = require('express');
const router = express.Router();
const backlogCtrl = require('../controllers/backlog.controller');
// Importa undoCtrl y queueCtrl aquí...

// Backlog
router.post('/backlog/tasks', backlogCtrl.createTask);
router.get('/backlog/tasks', backlogCtrl.getTasks);
router.get('/backlog/tasks/:id', backlogCtrl.getTaskById);
router.delete('/backlog/tasks/:id', backlogCtrl.deleteTask);

// Añade las rutas de Undo y Queue mapeando los controladores...

module.exports = router;