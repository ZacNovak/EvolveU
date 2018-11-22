import c from "./community";

test('Lets test', () => {
	console.log("Hello World from community!");
});

test('lets test', () => {
    let x = new c.People('Zac', 29, 10.00);
    expect(x.show()).toBe('Name: Zac - Age: 29 - Dollars: 10.00');

}