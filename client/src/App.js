import React from "react";
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import ArticleSearch from './components/ArticleSearch';
import About from './components/About';
import Home from './components/Home';
import "./App.css";
import "./fonts/stylesheet.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Jumbo />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/snippets" component={ArticleSearch} />
            <Route exact path="/about" component={About} />
            <Route exact path="/testarticle" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
