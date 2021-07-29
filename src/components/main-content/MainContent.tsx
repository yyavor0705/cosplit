import React from "react";
import {Grid} from "@material-ui/core";

import styles from "./MainContent.module.css"

const MainContent: React.FC = (props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={styles.MainContent}>
      {props.children}
    </Grid>
  );
}

export default MainContent;