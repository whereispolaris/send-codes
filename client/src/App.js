import React, { Component } from "react";
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import ArticleSearch from './components/ArticleSearch';
import "./App.css";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
        <div className="container">
          <ArticleSearch />
        </div>
      </div>
    );
  }
}

export default App;
