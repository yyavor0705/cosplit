import {AppBar, Toolbar} from "@material-ui/core";
import React, {useContext} from "react";
import LogoutButton from "./LogoutButton/LogoutButton";
import AuthContext from "../../store/auth-context";

const TopBar = () => {
  const authContext = useContext(AuthContext);
  
  return (
    <AppBar position="static">
      <Toolbar>
        {authContext.isLoggedIn && <LogoutButton/>}
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;