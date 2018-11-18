import React from 'react';
import ll from "./LinkedList";



class LinkedListComp extends React.Component{
    //constructor(){
    // this.linkListString = "";
    //   this.onNew = this.onNew.bind(this)
    //}
     


    onNew(){
        let subject = document.getElementById('Subject').value;
        let amount = document.getElementById('Amount').value;
        let linkListString = new ll.LinkedList(subject, amount);
        console.log(linkListString);
        
    }

    //onShow(){
     //   this.linkListString.show()
    //}
    
    
    
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button id = "new" onClick={this.onNew}>New</button>
                <button id = "add">Add</button>
                <br/>
                Subject: <input type = "text" id="Subject"/>
                Amount: <input type = "text" id="Amount"/>
                <br/>
                <br/>
                <button id = "show" onClick={this.onShow}>Show All</button>
            
                <div>
                    <p> Sample Text </p>
                </div>
            </div>

            
        );
    }
}

export default LinkedListComp;


