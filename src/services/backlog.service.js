const backlogRepo = require('../repositories/backlog.repository');
const undoService = require('./undo.service');
const Task = require('../models/Task');

const createTask = (title) => {
    const newTask = new Task(title);
    backlogRepo.append(newTask);
    undoService.addAction(`Se creó la tarea: ${title}`); // Orquestación cruzada
    return newTask;
};

const getTasks = () => backlogRepo.toArray();
const getTaskById = (id) => backlogRepo.findById(id);

const deleteTask = (id) => {
    const task = backlogRepo.findById(id);
    if (!task) return false;
    const isDeleted = backlogRepo.removeById(id);
    if (isDeleted) {
        undoService.addAction(`Se eliminó la tarea: ${task.title}`);
    }
    return isDeleted;
};

module.exports = { createTask, getTasks, getTaskById, deleteTask };