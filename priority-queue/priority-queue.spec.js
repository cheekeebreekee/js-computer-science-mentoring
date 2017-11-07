import PriorityQueue from './priority-queue';
import Node from './node';
import testConfig from '../setup-mocha.js';

describe('PriorityQueue', () => {
    describe('#constructor', () => {
        const priorityQueue = new PriorityQueue();

        it('assign 0 to this.length', () => {
            expect(priorityQueue.length).to.equal(0);
        })
    });

    describe('#unshift', () => {
        it('should assign new node as _top of priorityQueue', () => {
            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(50, 2);
            priorityQueue.unshift(100, 1);

            expect(priorityQueue.length).to.equal(2);
            expect(priorityQueue.head.value).to.equal(100);
            expect(priorityQueue.tail.value).to.equal(50);
        });

        it('should add new node to priorityQueue', () => {
            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(50, 1);
            priorityQueue.unshift(100, 4);
            priorityQueue.unshift(51, 8);
            priorityQueue.unshift(422, 3);

            expect(priorityQueue.length).to.equal(4);
            expect(priorityQueue.head.value).to.equal(50);
            expect(priorityQueue.tail.value).to.equal(51);
        });

    });

    describe('#shift', () => {
        it('should assign new node as _top of priorityQueue', () => {

            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(62, 4);
            priorityQueue.unshift(53, 2);
            priorityQueue.unshift(1, 2);
            priorityQueue.shift();

            expect(priorityQueue.tail.value).to.equal(62);
            expect(priorityQueue.head.value).to.equal(53);
        });

        it('should set new node as _top of priorityQueue and add new value', () => {
            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(50, 2);
            priorityQueue.unshift(100, 1);
            priorityQueue.unshift(51, 7);
            priorityQueue.unshift(422, 4);
            priorityQueue.shift();
            priorityQueue.shift();
            priorityQueue.shift();

            expect(priorityQueue.length).to.equal(1);
            expect(priorityQueue.head.value).to.equal(51);
            expect(priorityQueue.tail.value).to.equal(51);
        });

    });

    describe('#isEmpty', () => {
        it('should assign new node as _top of priorityQueue', () => {

            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(33, 4);
            priorityQueue.unshift(2, 12);
            priorityQueue.unshift(1, 9);
            priorityQueue.unshift(8, 29);
            priorityQueue.shift();
            priorityQueue.shift();

            expect(priorityQueue.length).to.equal(2);
            expect(priorityQueue.head.value).to.equal(2);
            expect(priorityQueue.tail.value).to.equal(8);
            expect(priorityQueue.isEmpty()).to.equal(false);
        });

        it('should set new node as _top of priorityQueue and add new value', () => {
            const priorityQueue = new PriorityQueue();

            priorityQueue.unshift(895, 5);
            priorityQueue.unshift(334, 3);
            priorityQueue.unshift(2, 1);
            priorityQueue.unshift(8784, 10);
            priorityQueue.shift();
            priorityQueue.shift();
            priorityQueue.shift();
            priorityQueue.shift();

            expect(priorityQueue.length).to.equal(0);
            expect(priorityQueue.head.value).to.equal(null);
            expect(priorityQueue.tail.value).to.equal(null);
            expect(priorityQueue.isEmpty()).to.equal(true);
        });

    });
});
