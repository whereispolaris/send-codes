import React, {Component} from "react";
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import ArticleSearch from './components/ArticleSearch';
import About from './components/About';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import "./App.css";
import "./fonts/stylesheet.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
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
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
