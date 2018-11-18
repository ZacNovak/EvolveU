import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ll from './Components/linkList';
import LinkListComp from './Components/LinkListComp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <LinkList />
          <h1> This is my new beginning </h1>
          <LinkListComp/>
        </header>
      </div>
      
    );
  }
}

class LinkList extends Component{



  createDiv(){
    // console.log(document.querySelector('#node'));
    var x = new ll.LinkList(document.querySelector('#createNode').value);
    console.log(x);
  }

  // addDiv(x){
  //   x.add(document.querySelector('#addNode').value);
  //   console.log(x);
  // }
  
  render(){
    return (
      <div>
        <input type="text" id="createNode" name="nodeName"/> 
        <button className='btn' onClick={this.createDiv}> Create Node </button>
       
       
       
        
      </div>
    );
  }
}




export default App;

 // <input type="text" id="addNode" name="addNodeName"/> 
  //      <button class = 'btn' onClick ={this.addDiv}> Add Node </button> 