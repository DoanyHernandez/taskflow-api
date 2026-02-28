class Queue {
    constructor() { this.items = []; }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift() || null; }
    front() { return this.items.length > 0 ? this.items[0] : null; }
}
module.exports = Queue;