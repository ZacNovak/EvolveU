import ll from "./LinkedList";

test('Lets test', () => {
    console.log("Hello World!");
});

test('lets test', () => {
    let x = new ll.LinkedList('first', '10.00');
    //console.log(x);
    x.show();
    expect(x.show()).toBe('first - 10.00')

    x.add('second', '20.00');
    expect(x.show()).toBe('first - 10.00, second - 20.00');

    expect(x.showOne()).toBe('second - 20.00');
    expect(x.first()).toBe('first - 10.00');
    expect(x.next()).toBe('second - 20.00');
    expect(x.previouse()).toBe('first - 10.00');
    
    x.insert('two-half', '25.00');
    expect(x.show()).toBe('first - 10.00, two-half - 25.00, second - 20.00')
    x.delete();
    expect(x.show()).toBe('first - 10.00, second - 20.00')
    x.add('third', '30.00')
    expect(x.last()).toBe('third - 30.00')



});
