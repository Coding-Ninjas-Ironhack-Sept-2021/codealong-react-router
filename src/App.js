import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login">
            <Redirect to="/user-profile" />
          </Route>
        </Switch>

      </div>
    );
  }
}

export default App;
