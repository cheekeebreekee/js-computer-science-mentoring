import LinkedList from './linked-list';
import Node from './node';
import testConfig from '../setup-mocha.js';

describe('LinkedList', () => {
    describe('#constructor', () => {
        const list = new LinkedList();

        it('assign 0 to this.length', () => {
            expect(list.length).to.equal(0);
        })
    });

    describe('#append', () => {
        it('should assign new node as _top of list', () => {
            const value = 144;

            const list = new LinkedList();

            list.append(value);

            expect(list.head).to.be.an.instanceof(Node);
            expect(list.head.value).to.equal(144);
        });

        it('should set new node as _top of list and add new value', () => {
            const list = new LinkedList();

            list.append(50);
            list.append(100);
            list.append(51);
            list.append(422);

            expect(list.length).to.equal(4);
            expect(list.head.value).to.equal(50);
        });

    });
});
