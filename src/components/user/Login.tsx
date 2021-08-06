import {Paper, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useContext, useRef} from "react";

//import useHttp from "../../hooks/use-http";
import UserForm from "./UserForm";
import AuthContext from "../../store/auth-context";

const LoginForm: React.FC = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  //const {sendRequest} = useHttp();
  const authCtx = useContext(AuthContext);
  
  const login = (event: React.FormEvent) => {
    event.preventDefault();
    authCtx.onLogin();
    // console.log("Login call: " + email.current!.value + " " + password.current!.value);
    // const response = sendRequest({
    //   url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBA5P61AT2iXKI8657cyhwG-7G9iSwIySM",
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: email.current!.value,
    //     password: password.current!.value,
    //     returnSecureToken: true
    //   })
    // });
    // console.log(response);
  }
  
  return (
    <Paper elevation={3}>
      <UserForm>
        <TextField label="Email" inputRef={email}/>
        <TextField label="Password" inputRef={password} type="password"/>
        <Button variant="contained" color="primary" onClick={login}>
          Login
        </Button>
      </UserForm>
    </Paper>
  );
}

export default LoginForm;