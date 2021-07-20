import React, {useRef} from "react";
import {Input, TextField, FormControl} from "@material-ui/core";
import Button from '@material-ui/core/Button';

import useHttp from "../../hooks/use-http";

const RegistrationForm: React.FC = (props) => {
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const {requestInProgress, sendRequest} = useHttp()
  
  const register = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Register call: " + email.current!.value + " " + password.current!.value);
    const response = sendRequest({
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBA5P61AT2iXKI8657cyhwG-7G9iSwIySM",
      method: "POST",
      body: JSON.stringify({
        email: email.current!.value,
        password: password.current!.value,
        returnSecureToken: true
      })
    });
    console.log(response);
  }
  
  return (
    <FormControl>
      <TextField label="Email" inputRef={email}/>
      <TextField label="Password" inputRef={password} type="password"/>
      <Button variant="contained" color="primary" onClick={register}>
        Register
      </Button>
    </FormControl>
  );
}

export default RegistrationForm;