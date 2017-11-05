import Stack from './stack';
import Node from './node';
import testConfig from '../setup-mocha.js';

describe('Stack', () => {
    describe('#constructor', () => {
        const stack = new Stack();

        it('assign 0 to this.length', () => {
            expect(stack.length).to.equal(0);
        })
    });

    describe('#push', () => {
        it('should assign new node as _top of stack', () => {
            const value = 10;

            const stack = new Stack();

            stack.push(value);

            expect(stack._top).to.be.an.instanceof(Node);
            expect(stack._top.value).to.equal(10);
        });

        it('should set new node as _top of stack and add new value', () => {
            const stack = new Stack();

            stack.push(50);
            stack.push(100);
            stack.push(51);
            stack.push(422);
            stack.push(55);
            stack.push(112);

            expect(stack.length).to.equal(6);
            expect(stack._top.value).to.equal(112);
        });

    });

    describe('#pop', () => {
        it('_top element of stack should be null if stack is empty', () => {
            const stack = new Stack();

            stack.push(34);
            stack.pop();

            expect(stack.length).to.equal(0);
            expect(stack._top.value).to.equal(null);
        });

        it('should set new node as _top of stack and add new value', () => {
            const stack = new Stack();

            stack.push(42);
            stack.push(662);
            stack.push(123);
            stack.push(885);
            stack.push(3);
            stack.push(4);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();

            expect(stack.length).to.equal(2);
            expect(stack._top.value).to.equal(662);
        });

    });

    describe('#peek', () => {
        it('should return value of top element', () => {
            const stack = new Stack();

            stack.push(100);
            stack.peek();

            expect(stack._top.value).to.equal(100);
        });

        it('should set new node as _top of stack and add new value', () => {
            const stack = new Stack();

            stack.push(91);
            stack.push(5);
            stack.push(12);
            stack.push(997);
            stack.push(709);
            stack.push(40);
            stack.push(84);
            stack.push(27);

            expect(stack._top.value).to.equal(27);
        });

    });
});
