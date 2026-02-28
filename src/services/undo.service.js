const undoRepo = require('../repositories/undo.repository');
const { v4: uuidv4 } = require('uuid');

const addAction = (description) => {
    const action = { id: uuidv4(), description, createdAt: new Date() };
    undoRepo.push(action);
    return action;
};
const undoAction = () => undoRepo.pop();
const peekLastAction = () => undoRepo.peek();

module.exports = { addAction, undoAction, peekLastAction };