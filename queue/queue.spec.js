import Queue from './queue';
import Node from './node';
import testConfig from '../setup-mocha.js';

describe('Queue', () => {
    describe('#constructor', () => {
        const queue = new Queue();

        it('assign 0 to this.length', () => {
            expect(queue.length).to.equal(0);
        })
    });

    describe('#enqueue', () => {
        it('should assign new node as _top of queue', () => {
            const value = 144;

            const queue = new Queue();

            queue.enqueue(value);

            expect(queue.head).to.be.an.instanceof(Node);
            expect(queue.head.value).to.equal(144);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.enqueue(50);
            queue.enqueue(100);
            queue.enqueue(51);
            queue.enqueue(422);

            expect(queue.length).to.equal(4);
            expect(queue.head.value).to.equal(50);
            expect(queue.tail.value).to.equal(422);
        });

    });

    describe('#dequeue', () => {
        it('should assign new node as _top of queue', () => {

            const queue = new Queue();

            queue.enqueue(62);
            queue.enqueue(53);
            queue.enqueue(1);
            queue.dequeue();

            expect(queue.head).to.be.an.instanceof(Node);
            expect(queue.head.value).to.equal(53);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.enqueue(50);
            queue.enqueue(100);
            queue.enqueue(51);
            queue.enqueue(422);
            queue.dequeue();
            queue.dequeue();
            queue.dequeue();

            expect(queue.length).to.equal(1);
            expect(queue.head.value).to.equal(50);
            expect(queue.tail.value).to.equal(50);
        });

    });

    describe('#isEmpty', () => {
        it('should assign new node as _top of queue', () => {

            const queue = new Queue();

            queue.enqueue(33);
            queue.enqueue(2);
            queue.enqueue(1);
            queue.dequeue();
            queue.dequeue();

            expect(queue.isEmpty()).to.equal(false);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.enqueue(895);
            queue.enqueue(334);
            queue.enqueue(2);
            queue.enqueue(8784);
            queue.dequeue();
            queue.dequeue();
            queue.dequeue();
            queue.dequeue();

            expect(queue.isEmpty()).to.equal(true);
        });

    });
});
