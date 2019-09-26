import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jyoti', age: 27},
      {name: 'Tushar', age: 25},
      {name: 'Aayush', age: 28}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <p>This is working</p>
        <button>switch name</button>
        <Person name="Jyoti" age="27"> Extra text for testing..!!!</Person>
        <Person name="Tushar" age="25" />
        <Person name="Aayush" age="27" />
      </div>
    );
  }
}

export default App;
