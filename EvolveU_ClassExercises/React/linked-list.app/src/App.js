import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './Components/LinkedListComp';


class App extends Component {
  
  onPassedFunction = () => {
    console.log("We are in the APP Function");
  }
  
  render() {
    return (
      <div className="App">
        <h1>Linked List 4</h1>
        <LinkedListComp name="Top" func={this.onPassedFunction}/>
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
        </header>
      </div>
    );
  }
}

export default App;
