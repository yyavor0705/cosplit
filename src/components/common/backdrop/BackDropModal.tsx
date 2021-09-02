import React from "react";
import {Dialog, Paper} from "@material-ui/core";

interface IBackDropModal {
  onHide: () => void,
  open: boolean
}

const BackDropModal: React.FC<IBackDropModal> = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onHide}>
      <Paper elevation={3}>
        {props.children}
      </Paper>
    </Dialog>
  );
}

export default BackDropModal;