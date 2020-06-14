import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Component Import
import ContactList from "./Components/Contact/ContactList";
import Header from "./Components/Layouts/Header";
import About from './Components/Pages/About'
import AddContact from "./Components/Contact/AddContact";
import NotFound from './Components/Pages/NotFound'
import test from './Components/test';

import { Provider } from "./Context";

export default class extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <Container>
              <Switch>
                <Route exact path="/" component={ContactList}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/test" component={test}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}
