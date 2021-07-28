import React from 'react';
import {Route} from "react-router-dom"
import {StylesProvider, AppBar, Toolbar} from "@material-ui/core"

import LoginForm from "./components/user/login";
import RegistrationForm from "./components/user/registration";

import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Route path="/" component={LoginForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/registration" component={RegistrationForm} />
    </StylesProvider>
  );
}

export default App;
