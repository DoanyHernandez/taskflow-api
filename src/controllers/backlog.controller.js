const backlogService = require('../services/backlog.service');

const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const task = backlogService.createTask(title);
    res.status(201).json(task);
};

const getTasks = (req, res) => {
    res.status(200).json(backlogService.getTasks());
};

const getTaskById = (req, res) => {
    const task = backlogService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const success = backlogService.deleteTask(req.params.id);
    if (!success) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
};

module.exports = { createTask, getTasks, getTaskById, deleteTask };