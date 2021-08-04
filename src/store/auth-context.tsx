import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {}
});

export const AuthContextProvider: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  }

  const loginHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "1")
  }

  return (
    <AuthContext.Provider value={
      {
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }
    }>
      {props.children}
    </AuthContext.Provider>
  );

}

export default AuthContext;