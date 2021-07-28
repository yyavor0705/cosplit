import React from 'react';
import {Route} from "react-router-dom"
import {StylesProvider, AppBar, Toolbar} from "@material-ui/core"

import LoginForm from "./components/user/Login";
import RegistrationForm from "./components/user/Registration";

import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Route path="/" component={LoginForm} exact/>
      <Route path="/login" component={LoginForm} exact/>
      <Route path="/registration" component={RegistrationForm} exact/>
    </StylesProvider>
  );
}

export default App;
