import React from 'react';
import ll from "./LinkedList";



class LinkedListComp extends React.Component{
    constructor(){
        super();
        this.linkedList = null;
        this.state = {
            stateDisplay: "Display Area"
        }
    }
     


    onNew = () => {
        let subject = document.getElementById('Subject').value;
        let amount = document.getElementById('Amount').value;
        this.linkedList = new ll.LinkedList(subject, amount);
        this.setState({display: this.linkedList.showOne()})        
    }

    onShow = () => {
        if(this.linkedList) {
            this.setState({display: this.linkedList.show()})
        }
    }

    onAdd = () => {
        if(this.linkedList){
            this.linkedList.add(document.getElementById('Subject').value, document.getElementById('Amount').value);
            this.setState({display: this.linkedList.showOne()})
        }
    }

    onInsert = () => {
        if(this.linkedList){
            this.setState({display: 
                this.linkedList.insert(
                    document.getElementById('Subject').value, 
                    document.getElementById('Amount').value)})
        }
    }

    onDelete = () => {
        if(this.linkedList){
            this.setState({display: 
                this.linkedList.delete(
                    document.getElementById('Subject').value, 
                    document.getElementById('Amount').value)})
        }
    }

    onFirst = () => {
        if(this.linkedList){
            this.setState({display: this.linkedList.first()});
        }
    }
    
    onLast = () => {
        if(this.linkedList){
            this.setState({display: this.linkedList.last()});
        }
    }

    onNext = () => {
        if(this.linkedList){
            this.setState({display: this.linkedList.next()});
        }
    }

    onPreviouse = () => {
        if(this.linkedList){
            this.setState({display: this.linkedList.previouse()});
        }
    }

    onClear = (e) => {
        e.currentTarget.innerHTML = "";
      }

    onShowState = () => {
        let s = this.state.stateExample + ' some change ' + this.count++;
        this.setState ({
        stateExample: s,
        })
        console.log("In on ShowState", this.props.func);
    }
    
    
    render() {
        return (
            <div>
                <h1>Hello AMAZING! Woop!</h1>
                <button id = "new" onClick={this.onNew}>New</button>
                <button id = "add" onClick={this.onAdd}>Add</button>
                <button id = "insert" onClick={this.onInsert}>Insert</button>
                <button id = "delete" onClick={this.onDelete}>Delete</button>

                <br/>
                Subject: <input type = "text" id="Subject"/>
                Amount: <input type = "text" id="Amount"/>
                <br/>
                <br/>
                <button id = "first" onClick={this.onFirst}>First</button>
                <button id = "next" onClick={this.onNext}>Next</button>
                <button id = "previouse" onClick={this.onPreviouse}>Previouse</button>
                <button id = "last" onClick={this.onLast}>Last</button>
                <br/>
                <br/>
                <button id = "show" onClick={this.onShow}>Show All</button>
                <div> {this.state.display}</div>
            </div>

            
        );
    }
}

export default LinkedListComp;


