import {Paper, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useContext, useRef} from "react";
import {Link} from "react-router-dom"

//import useHttp from "../../hooks/use-http";
import UserForm from "./UserForm";
import AuthContext from "../../store/auth-context";

import styles from "./Login.module.css"

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
        <Typography variant="h6" component="h6">Login Form</Typography>
        <TextField label="Email" inputRef={email}/>
        <TextField label="Password" inputRef={password} type="password"/>
        <Button variant="contained" color="primary" onClick={login}>
          login
        </Button>
        <Link className={styles.SignupSpan} to="/registration">Signup now</Link>
    </UserForm>
</Paper>
);
}

export default LoginForm;