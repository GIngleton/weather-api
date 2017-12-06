import React, { Component } from 'react';
import './App.css';
import MyNavBar from "./components/MyNavBar.js";



class App extends Component {
  render() {
    return (
      <div>
      <MyNavBar />
      {this.props.children}
    </div>
    );
  }
}

export default App;
