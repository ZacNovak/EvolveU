import zn from './linkList'; 


test('Print Boom!', () => {
    let x = new zn.LinkList();
    expect(x.play("boom!")).toBe("boom!");
});

test('Print first', () => {
    let x = new zn.LinkList('first');
    expect(x.show()).toBe('first');
    
    x.add('second');
    expect(x.show()).toBe('first, second');

    x.add('third');
    expect(x.show()).toBe('first, second, third');

    x.add('fourth');
    expect(x.show()).toBe('first, second, third, fourth');

    
    let y = new zn.LinkList('second');
    //expect(y.show()).toBe('second');
});

