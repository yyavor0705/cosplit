import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import {StylesProvider} from "@material-ui/core"

import AuthContext from "./store/auth-context";
import LoginForm from "./components/user/Login";
import TopBar from "./components/TopBar/TopBar";
import EventsList from "./components/events/EventsList";
import RegistrationForm from "./components/user/Registration";
import MainContent from "./components/main-content/MainContent";

import './App.css';

function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <StylesProvider injectFirst>
      <TopBar/>
      <MainContent>
        <Switch>
          {!authCtx.isLoggedIn && <Route path="/login" component={LoginForm}/>}
          {!authCtx.isLoggedIn && <Route path="/registration" component={RegistrationForm}/>}
          {authCtx.isLoggedIn && <Route path="/events" component={EventsList}/>}
          <Route path="*">
            {authCtx.isLoggedIn && <Redirect to="/events"/>}
            {!authCtx.isLoggedIn && <Redirect to="/login"/>}
          </Route>
        </Switch>
      </MainContent>
    </StylesProvider>
  );
}

export default App;
