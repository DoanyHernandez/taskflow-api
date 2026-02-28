const express = require('express');
const taskService = require('./services/task.service');
const app = express();

app.use(express.json());

// --- 1. RUTAS DEL BACKLOG (Lista Enlazada) ---
app.post('/backlog/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "El título es requerido" });
    const task = taskService.createTask(title);
    res.status(201).json(task);
});

app.get('/backlog/tasks', (req, res) => {
    res.json(taskService.getAllTasks());
});

// --- 2. RUTAS DE UNDO (Pila/Stack) ---
app.get('/undo/peek', (req, res) => {
    const action = taskService.getLatestAction();
    if (!action) return res.status(404).json({ message: "No hay acciones para deshacer" });
    res.json({ latestAction: action });
});

app.delete('/undo', (req, res) => {
    const action = taskService.undoLastAction();
    if (!action) return res.status(404).json({ message: "Nada que deshacer" });
    res.status(200).json({ message: "Acción deshecha", action });
});

// --- 3. RUTAS DE QUEUE (Cola) ---
app.post('/queue', (req, res) => {
    const { taskId } = req.body;
    const task = taskService.enqueueTask(taskId);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada en backlog" });
    res.status(201).json({ message: "Tarea encolada", task });
});

app.delete('/queue', (req, res) => {
    const task = taskService.processNext();
    if (!task) return res.status(404).json({ message: "La cola está vacía" });
    res.json({ message: "Tarea procesada", task });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor TaskFlow corriendo en http://localhost:${PORT}`);
});