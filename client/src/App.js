import React, { Component } from "react";
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
      </div>
    );
  }
}

export default App;
