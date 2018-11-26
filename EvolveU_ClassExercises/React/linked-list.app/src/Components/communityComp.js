import React from 'react';
import c from "./community";





class CommunityComp extends React.Component{
    constructor(){
        super();
        this.community = null; 
        this.state = {
            stateDisplay: "Display Area"
        }
    }

    onCreatePerson = () => {
        let name = document.getElementById('Name').value;
        let age = parseInt(document.getElementById('Age').value);
        let dollars = parseInt(document.getElementById('Dollars').value);
        if(this.community === null){
            this.community = new c.Community([]);
            this.community.people[0] = new c.People(name, age, dollars);
        } else{
            this.community.people[this.community.people.length] = new c.People(name, age, dollars);
        }
        
        this.setState({display: this.community.people[this.community.people.length-1].show()})        
    }

    onBirthday = () => {
        this.community.people[this.community.people.length-1].birthday();
        console.log(this.community.people[this.community.people.length-1]);
        this.setState({display: this.community.people[this.community.people.length-1].show()})        
    }

    onBirthdayAll = () => {
        this.community.birthdayAll();
        this.setState({display: this.community.showAll()}) 

    }

    onShowAll = () => {
        this.setState({display: this.community.showAll()}) 
    }

    onSumAges = () => {
        this.setState({display: this.community.sumAges()}); 

    }

    render() {
        return (
            <div>
                <h1>Ths is my community</h1>
                Name: <input type = "text" id="Name"/><br/>
                Age: <input type = "text" id="Age"/><br/>
                Dollars: <input type = "text" id="Dollars"/><br/>
                
                <button id = "Create Person" onClick={this.onCreatePerson}>Create Person </button>
                <button id = "Birthday" onClick={this.onBirthday}>Birthday!</button>

                <button id = "Show All" onClick={this.onShowAll}>Show all </button>
                <button id = "Birthday All" onClick={this.onBirthdayAll}>Birthday's for all </button>
                <button id = "Sum Ages" onClick={this.onSumAges}>Sum all ages</button>



                <div> {this.state.display}</div>
            </div>

            
        );
    }
}

export default CommunityComp;