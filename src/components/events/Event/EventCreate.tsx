import {FormControl, TextField, Typography} from "@material-ui/core";
import React, {useRef} from "react";
import Button from "@material-ui/core/Button";
import styles from "./Event.module.css";
import IEventShortData from "../../../models/IEventShortData";
import BackDropModal from "../../common/backdrop/BackDropModal";

interface IEventCreateProps {
  open: boolean,
  handleClose: () => void
  handleCreate: (newEvent: IEventShortData) => void
}

const EventCreate: React.FC<IEventCreateProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  
  const hideDialog = () => {
    props.handleClose();
  }
  
  const createEvent = () => {
    const newEvent: IEventShortData = {
      id: Math.random().toString(),
      title: titleRef.current!.value,
      creator: {
        id: "513456",
        firstName: "Yurii",
        lastName: "Yav"
      },
      costs_data: [
        {
          participant: {
            id: "7",
            firstName: "Stacee",
            lastName: "Challinor"
          },
          costs: -130.05
        },
        {
          participant: {
            id: "3",
            firstName: "Gordan",
            lastName: "Sally"
          },
          costs: -1042.05
        },
        {
          participant: {
            id: "8",
            firstName: "Alejandra",
            lastName: "Coulson"
          },
          costs: 14.05
        },
      ]
    }
    props.handleCreate(newEvent)
  }
  
  return (
    <BackDropModal onHide={hideDialog} open={props.open}>
      <FormControl className={styles.CreateForm}>
        <Typography variant="h6" component="h6">Crete New Event</Typography>
        <TextField label="Title" inputRef={titleRef}/>
        <Button variant="contained" color="primary" onClick={createEvent}>
          create
        </Button>
        <Button onClick={hideDialog}>
          cancel
        </Button>
      </FormControl>
    </BackDropModal>
  );
}

export default EventCreate;