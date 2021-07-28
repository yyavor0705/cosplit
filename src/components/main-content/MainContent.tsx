import React from "react";
import {Grid} from "@material-ui/core";

const MainContent: React.FC = (props) => {
  return (
    <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center">
      {props.children!}
    </Grid>
  );
}

export default MainContent;