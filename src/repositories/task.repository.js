class TaskRepository {
    constructor() {
        this.backlog = []; // Usaremos un array como Lista Enlazada simple
        this.undoStack = []; // Pila (Last-In, First-Out)
        this.processingQueue = []; // Cola (First-In, First-Out)
    }

    // --- Métodos Backlog ---
    findAll() { return this.backlog; }
    findById(id) { return this.backlog.find(t => t.id === id); }
    create(task) { this.backlog.push(task); return task; }
    delete(id) {
        const index = this.backlog.findIndex(t => t.id === id);
        if (index !== -1) return this.backlog.splice(index, 1)[0];
        return null;
    }

    // --- Métodos Pila (Undo) ---
    pushAction(action) { this.undoStack.push(action); }
    popAction() { return this.undoStack.pop(); }
    peekAction() { return this.undoStack[this.undoStack.length - 1]; }

    // --- Métodos Cola (Queue) ---
    enqueue(task) { this.processingQueue.push(task); }
    dequeue() { return this.processingQueue.shift(); }
    peekQueue() { return this.processingQueue[0]; }
}

module.exports = new TaskRepository();