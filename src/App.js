import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {Projects} from "./components/Projects"
import ProjectDetails from "./components/ProjectDetails"

import { Redirect, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />          
          
          <Route exact path="/projects" component={Projects} />

          <Route path="/projects/:projectId" component={ProjectDetails} />

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
