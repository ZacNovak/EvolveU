 import c from "./community";

 test('Lets test', () => {
 	console.log("Hello World from community!");
 });

 test('lets test', () => {
     let x = new c.People('Zac', 29, 10.00);
     expect(x.show()).toBe('Name: Zac - Age: 29 - Dollars: 10');
     x.birthday();
     expect(x.show()).toBe('Name: Zac - Age: 30 - Dollars: 10');

    let p = new c.People('Jeff', 39, 1000000);
    let bff = p;
    bff.birthday();
    console.log(bff.show());
    console.log(p.show());

    let person1 = new c.People('Albert', 15, 30000);
    let person2 = new c.People('Brad', 25, 40000);
    let person3 = new c.People('Catherine', 35, 50000);

    let personArray = [person1, person2, person3];

    let community = new c.Community(personArray);

    expect(community.showAll()).toBe('Name: Albert - Age: 15 - Dollars: 30000\nName: Brad - Age: 25 - Dollars: 40000\nName: Catherine - Age: 35 - Dollars: 50000');  
    expect(community.sumAges()).toBe(75);

    community.birthdayAll();
    expect(community.showAll()).toBe('Name: Albert - Age: 16 - Dollars: 30000\nName: Brad - Age: 26 - Dollars: 40000\nName: Catherine - Age: 36 - Dollars: 50000');  
    expect(community.sumAges()).toBe(78);


    let me = new c.People('Zac', 29, 20000);
    let teacher = new c.People('Larry', 30, 100000);

    me.mentor = teacher; 
    teacher.birthday();
    console.log(me.show());
    console.log(teacher.show());
    me.birthday();
    teacher.mentor = new c.People('Wise Person', 50, 500000);
    expect(teacher.mentor.name).toEqual('Wise Person');
    //console.log(teacher.mentor.name);
    expect(teacher.mentor.age).toEqual(50);
    //console.log(teacher.mentor.age);
    teacher.mentor.birthday();
    expect(teacher.mentor.age).toEqual(51);
    //console.log(teacher.mentor.age);

 });