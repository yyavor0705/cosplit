import React from "react";
import {FormControl} from "@material-ui/core";

import styles from "./UserForm.module.css"

const UserForm: React.FC = (props) => {
  return (
    <FormControl className={styles.UserForm}>
      {props.children}
    </FormControl>
  );
}

export default UserForm;