import {AppBar, Toolbar} from "@material-ui/core";
import React from "react";
import LogoutButton from "./LogoutButton/LogoutButton";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LogoutButton/>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;