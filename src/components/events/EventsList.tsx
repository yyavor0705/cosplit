import React, {Fragment, useState} from "react";
import EventListItem from "./Event/EventListItem";
import Button from "@material-ui/core/Button";
import EventCreate from "./Event/EventCreate";

import styles from "./EventsList.module.css";
import IEvent from "../../models/IEvent";

const DATA: IEvent[] = [
  {
    id: "ev1",
    title: "This is event 1",
    costs_data: [
      {
        participant: {
          id: "1",
          firstName: "Andrew",
          lastName: "Harison"
        },
        costs: -10.05
      },
      {
        participant: {
          id: "2",
          firstName: "Gauthier",
          lastName: "Chan"
        },
        costs: -10.05
      },
      {
        participant: {
          id: "3",
          firstName: "Gordan",
          lastName: "Sally"
        },
        costs: -1218.05
      },
    ]
  },
  {
    id: "ev2",
    title: "This is event 2",
    costs_data: [
      {
        participant: {
          id: "3",
          firstName: "Gordan",
          lastName: "Sally"
        },
        costs: -104.05
      },
      {
        participant: {
          id: "5",
          firstName: "Dinny",
          lastName: "Burleigh"
        },
        costs: 140.05
      },
      {
        participant: {
          id: "6",
          firstName: "Thorn",
          lastName: "Berrill"
        },
        costs: -4118.05
      },
    ]
  },
  {
    id: "ev3",
    title: "This is event 3",
    costs_data: [
      {
        participant: {
          id: "7",
          firstName: "Stacee",
          lastName: "Challinor"
        },
        costs: -10.05
      },
      {
        participant: {
          id: "3",
          firstName: "Gordan",
          lastName: "Sally"
        },
        costs: -102.05
      },
      {
        participant: {
          id: "8",
          firstName: "Alejandra",
          lastName: "Coulson"
        },
        costs: 1844.05
      },
    ]
  }
]

const EventList = () => {
  const [expandedPanel, setExpandedPanel] = useState("");
  const [eventsList, setEventsList] = useState(DATA)
  const [openCreateModal, setOpenCreateModal] = useState(false)
  
  const handleChange = (panelKey: string, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panelKey : "");
  };
  
  const handleDeleteEvent = (eventKey: string) => {
    const newList = eventsList.filter((element) => {
      return element.id !== eventKey;
    })
    setEventsList(newList);
  }
  
  const handleCreateEvent = (newEvent: IEvent) => {
    setEventsList((prevState) => {
      prevState.push(newEvent);
      return prevState;
    });
    setOpenCreateModal(false);
  }
  
  return (
    <Fragment>
      <Button className={styles.CreateButton} variant="contained" color="primary"
              onClick={() => setOpenCreateModal(true)}>
        create new event
      </Button>
      <EventCreate open={openCreateModal} handleClose={() => {
        setOpenCreateModal(false)
      }} handleCreate={handleCreateEvent}/>
      {
        eventsList.map(ev => {
            return (
              <EventListItem key={ev.id}
                             eventKey={ev.id}
                             expanded={expandedPanel === ev.id}
                             summary={ev.title}
                             details={"Details"}
                             onChangeHandler={handleChange}
                             shortDetailsData={ev.costs_data}
                             onDelete={handleDeleteEvent}
              />
            );
          }
        )
      }
    </Fragment>
  )
}

export default EventList;