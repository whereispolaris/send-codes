import React, { Component } from "react";
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import ArticleSearch from './components/ArticleSearch';
import SearchBar from './components/SearchBar';
import "./App.css";
import "./fonts/stylesheet.css";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbo />
        <div className="container">
          {/* <SearchBar/> */}
          <ArticleSearch />
        </div>
      </div>
    );
  }
}

export default App;
