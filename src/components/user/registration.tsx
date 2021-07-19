import React, {useRef} from "react";

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
    <form onSubmit={register}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={email}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={password}/>
      <button>Register</button>
    </form>
  );
}

export default RegistrationForm;