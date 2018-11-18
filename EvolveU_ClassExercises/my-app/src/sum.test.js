import zn from './sum';


// const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    console.log(zn + "hello world");
    expect(zn.sum(1, 2)).toBe(3);
    expect(zn.add(1,2)).toBe(4);
}); 

test('adds 1 + 2 with an additional 1 to equal 4', () => {
    console.log(zn + "hello world");
    expect(zn.add(1,2)).toBe(4);
});

let x = new zn.LinkList();

test('Print Boom!', () => {
    expect(x.play("boom!")).toBe("boom!");
});