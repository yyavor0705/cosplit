import Backdrop from '@material-ui/core/Backdrop';
import {Dialog, FormControl, Modal, Paper, TextField, Typography} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Event.module.css";

interface IEventCreateProps {
  open: boolean,
  handleClose: () => void
}

const EventCreate: React.FC<IEventCreateProps> = (props) => {
  const hideDialog = () => {
    props.handleClose();
  }
  
  return (
    <Dialog open={props.open} onClose={hideDialog}>
      <Paper elevation={3}>
        <FormControl className={styles.CreateForm}>
          <Typography variant="h6" component="h6">Crete New Event</Typography>
          <TextField label="Title"/>
          <Button variant="contained" color="primary" onClick={hideDialog}>
            create
          </Button>
          <Button onClick={hideDialog}>
            cancel
          </Button>
        </FormControl>
      </Paper>
    </Dialog>
  );
}

export default EventCreate;