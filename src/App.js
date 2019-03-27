import React, { Component } from 'react';
import Travel from './components/Travel';
import Navbar from './components/Navbar';
import user from './user.json'
import user1 from './user1.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar {...user1}/>
        <Travel {...user}/>
        <Travel {...user1}/>
      </div>
    );
  }
}

export default App;
