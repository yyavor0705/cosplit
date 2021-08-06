import {IconButton} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import styles from "./LogoutButton.module.css"
import {useContext} from "react";
import AuthContext from "../../../store/auth-context";

const LogoutButton = () => {
  const authContext = useContext(AuthContext);
  
  return (
    <IconButton color="inherit" aria-label="logout" component="span" size="medium" className={styles.LogoutButton}
                onClick={() => {
                  authContext.onLogout()}}>
      <LockIcon/>
    </IconButton>
  );
}

export default LogoutButton;