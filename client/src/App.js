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
const axios = require('axios');


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      user: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  componentDidMount() {
    this.getUser();
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          user: response.data.user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  logOut() {
    axios.post('user/logout', this.state.user).then(response => {
      console.log(this.state.user);
      console.log('Get logout response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log("Logout: The user has been logged out");
        this.setState({
          loggedIn: false,
          username: null
        })
      } else {
        console.log("Logout: Not successful");
      }
    })
  }

  render() {
      return (
        <BrowserRouter>
          <div>
            <Header />
            <button className="btn" onClick={() => this.logOut()}>Log Out </button>
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
