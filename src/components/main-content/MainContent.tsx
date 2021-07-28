import React from "react";
import {Container} from "@material-ui/core";

import styles from "./MainContent.module.css"

const MainContent: React.FC = (props) => {
  return (
    <Container className={styles.MainContent}>
      {props.children!}
    </Container>
  );
}

export default MainContent;