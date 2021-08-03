import React from 'react';
import {Route} from "react-router-dom"
import {StylesProvider, AppBar, Toolbar} from "@material-ui/core"

import LoginForm from "./components/user/Login";
import RegistrationForm from "./components/user/Registration";
import MainContent from "./components/main-content/MainContent";

import './App.css';
import EventsList from "./components/events/EventsList";

function App() {
  return (
    <StylesProvider injectFirst>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <MainContent>
        <Route path="/" component={LoginForm} exact/>
        <Route path="/login" component={LoginForm} exact/>
        <Route path="/registration" component={RegistrationForm} exact/>
        <Route path="/events" component={EventsList} exact/>
      </MainContent>
    </StylesProvider>
  );
}

export default App;
