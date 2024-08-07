 
import './App.css';

 import React, { Component } from 'react'
import Person from './components/Person';
 
 export default class App extends Component { constructor(props) {
  super(props)
 
  this.state = {
    show: false,
  }
 
 
 }
 

  toggle = () => {this.setState({ show:!this.state.show });
  }
  render() {
    return (
      <div className="App">
        <h1>Profile </h1>
        <button   onClick={this.toggle}>Show/Hide</button>
       {this.state.show && <Person/>} 
      </div>
    );
  }
}