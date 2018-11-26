import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LinkedListComp from './Components/LinkedListComp';
import CommunityComp from './Components/communityComp';

import linkIcon from './icons/link.png';
import peopleIcon from './icons/people.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      compToShow: 'logo',
    }
  }


  onPassedFunction = () => {
    console.log("We are in the APP Function");
  }

  onIcon = (e) => {
    this.setState({
      compToShow: e.currentTarget.name,
    });
  }
  
  render() {
    let toShow;
    if (this.state.compToShow === 'link'){
      toShow = 
        <div> 
          <h1>Linked List</h1>
           <LinkedListComp name="Top" func={this.onPassedFunction}/>
        </div>
    } else if (this.state.compToShow === 'people'){
      toShow =
        <div>
          <h1>Community</h1>
          <CommunityComp name = "Middle" func={this.onPassedFunction}/>
        </div>
    } else {
      toShow = 
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
    
    };
    return (
      <div className="App">
        <h1>Hello Wrold</h1>
        <img src={linkIcon} className="App-icons" name="link" onClick={this.onIcon} alt="logo" />
        <img src={peopleIcon} className="App-icons" name="people" onClick={this.onIcon} alt="logo" />
        <div> {toShow} </div>
      </div>
    );
  }
}

export default App;
