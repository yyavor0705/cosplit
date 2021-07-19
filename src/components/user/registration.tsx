import React, {useRef} from "react";

const RegistrationForm: React.FC = (props) => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const register = (event: React.FormEvent) => {
        event.preventDefault()
        console.log("Register call: "+email.current!.value+" "+password.current!.value)
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