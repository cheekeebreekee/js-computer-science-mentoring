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

    describe('#unshift', () => {
        it('should assign new node as _top of queue', () => {
            const value = 144;

            const queue = new Queue();

            queue.unshift(value);

            expect(queue.head).to.be.an.instanceof(Node);
            expect(queue.head.value).to.equal(144);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.unshift(50);
            queue.unshift(100);
            queue.unshift(51);
            queue.unshift(422);

            expect(queue.length).to.equal(4);
            expect(queue.head.value).to.equal(50);
            expect(queue.tail.value).to.equal(422);
        });

    });

    describe('#shift', () => {
        it('should assign new node as _top of queue', () => {

            const queue = new Queue();

            queue.unshift(62);
            queue.unshift(53);
            queue.unshift(1);
            queue.shift();

            expect(queue.head).to.be.an.instanceof(Node);
            expect(queue.head.value).to.equal(53);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.unshift(50);
            queue.unshift(100);
            queue.unshift(51);
            queue.unshift(422);
            queue.shift();
            queue.shift();
            queue.shift();

            expect(queue.length).to.equal(1);
            expect(queue.head.value).to.equal(50);
            expect(queue.tail.value).to.equal(50);
        });

    });

    describe('#isEmpty', () => {
        it('should assign new node as _top of queue', () => {

            const queue = new Queue();

            queue.unshift(33);
            queue.unshift(2);
            queue.unshift(1);
            queue.shift();
            queue.shift();

            expect(queue.isEmpty()).to.equal(false);
        });

        it('should set new node as _top of queue and add new value', () => {
            const queue = new Queue();

            queue.unshift(895);
            queue.unshift(334);
            queue.unshift(2);
            queue.unshift(8784);
            queue.shift();
            queue.shift();
            queue.shift();
            queue.shift();

            expect(queue.isEmpty()).to.equal(true);
        });

    });
});
