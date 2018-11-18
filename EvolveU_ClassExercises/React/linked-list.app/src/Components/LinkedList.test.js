import ll from "./LinkedList";

test('Lets test', () => {
    console.log("Hello World!");
});

test('lets test if import works', () => {
    let x = new ll.LinkedList('first', '10.00');
    //console.log(x);
    x.show();
    expect(x.show()).toBe('first - 10.00')

    x.add('second', '20.00');
    expect(x.show()).toBe('first - 10.00, second - 20.00');
});


