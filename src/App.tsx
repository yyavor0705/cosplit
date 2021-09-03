import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom"
import {StylesProvider} from "@material-ui/core"

import AuthContext from "./store/auth-context";
import LoginForm from "./components/user/Login";
import TopBar from "./components/TopBar/TopBar";
import EventsList from "./components/events/EventsList";
import RegistrationForm from "./components/user/Registration";
import MainContent from "./components/main-content/MainContent";
import EventDetailsPage from "./components/events/Event/EventDetailsPage";

import './App.css';
import NotFoundPage from "./components/common/NotFoundPage/NotFoundPage";

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn && <Route path="/event-details" component={EventDetailsPage}/>);
  
  const  unknownPageRedirectTo = authCtx.isLoggedIn ? "/events" : "/login"
  console.log(unknownPageRedirectTo);
  
  return (
    <StylesProvider injectFirst>
      <TopBar/>
      <MainContent>
        <Switch>
          {!authCtx.isLoggedIn && <Route path="/login" component={LoginForm}/>}
          {!authCtx.isLoggedIn && <Route path="/registration" component={RegistrationForm}/>}
          {authCtx.isLoggedIn && <Route exact path="/" component={EventsList}/>}
          {authCtx.isLoggedIn && <Route path="/event/:id" component={EventDetailsPage}/>}
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </MainContent>
    </StylesProvider>
  );
}

export default App;
