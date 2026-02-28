const queueRepo = require('../repositories/queue.repository');
const backlogRepo = require('../repositories/backlog.repository');

const enqueueTask = (taskId) => {
    const task = backlogRepo.findById(taskId);
    if (!task) throw new Error('TaskNotFound');
    queueRepo.enqueue(task);
    return task;
};
const dequeueTask = () => queueRepo.dequeue();
const peekNextTask = () => queueRepo.front();

module.exports = { enqueueTask, dequeueTask, peekNextTask };