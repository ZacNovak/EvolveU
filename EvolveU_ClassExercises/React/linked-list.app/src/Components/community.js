 class People {
    constructor(name, age, dollars){
        this.name = name;
        this.age = age;
        this.dollars = dollars;
    }

    show(){
    	return `Name: ${this.name} - Age: ${this.age} - Dollars: ${this.dollars}`   
    }


    birthday(){
    	return this.age += 1;
    } 


}

class Community {
    constructor(people){
        this.people = people;
    }

    showAll(){
        let peopleReturn = [];
        for(let i = 0; i<this.people.length; i++){
            if(i !== this.people.length -1){
                peopleReturn += `Name: ${this.people[i].name} - Age: ${this.people[i].age} - Dollars: ${this.people[i].dollars}\n`   
            } else {
                peopleReturn += `Name: ${this.people[i].name} - Age: ${this.people[i].age} - Dollars: ${this.people[i].dollars}`   
            }
        }
        return peopleReturn;
    }

    sumAges(){
        let sum = 0;
        for(let i = 0; i<this.people.length; i++){
            sum += this.people[i].age;
        }
        return sum;
    }

    birthdayAll(){
        for(let i = 0; i<this.people.length; i++){
            this.people[i].birthday();
        }
    }

}

export default { People, Community };

    

