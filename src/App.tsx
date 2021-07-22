import React from 'react';
import './App.css';

import RegistrationForm from "./components/user/registration";
import {StylesProvider, AppBar, Toolbar} from "@material-ui/core"
import {Route} from "react-router-dom"

function App() {
  return (
    <StylesProvider injectFirst>
      <AppBar position="static">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Route path="/registration" component={RegistrationForm} />
    </StylesProvider>
  );
}

export default App;
