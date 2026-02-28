const repository = require('../repositories/task.repository');
const { v4: uuidv4 } = require('uuid');

class TaskService {
    // Backlog
    createTask(title) {
        const newTask = { id: uuidv4(), title, createdAt: new Date() };
        repository.create(newTask);
        repository.pushAction(`Se creó la tarea: ${title}`);
        return newTask;
    }

    getAllTasks() { return repository.findAll(); }

    // Undo
    getLatestAction() { return repository.peekAction(); }
    undoLastAction() { return repository.popAction(); }

    // Queue
    enqueueTask(taskId) {
        const task = repository.findById(taskId);
        if (task) {
            repository.enqueue(task);
            return task;
        }
        return null;
    }
    processNext() { return repository.dequeue(); }
}

module.exports = new TaskService();