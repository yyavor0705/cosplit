import {Fragment, useState} from "react";
import EventListItem from "./Event/EventListItem";

const DATA = [
  {
    id: "ev1",
    title: "This is event 1",
    costs_data: [
      {
        id: 11,
        participantName: "user1",
        costs: -10.05
      },
      {
        id: 12,
        participantName: "user2",
        costs: 10.05
      },
      {
        id: 13,
        participantName: "user3",
        costs: 1218.05
      },
    ]
  },
  {
    id: "ev2",
    title: "This is event 2",
    costs_data: [
      {
        id: 21,
        participantName: "user12",
        costs: -104.05
      },
      {
        id: 22,
        participantName: "user22",
        costs: 140.05
      },
      {
        id: 23,
        participantName: "user32",
        costs: -4118.05
      },
    ]
  },
  {
    id: "ev3",
    title: "This is event 3",
    costs_data: [
      {
        id: 31,
        participantName: "user13",
        costs: -10.05
      },
      {
        id: 32,
        participantName: "user23",
        costs: -102.05
      },
      {
        id: 33,
        participantName: "user33",
        costs: 1844.05
      },
    ]
  }
]

const EventList: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState("");
  const [eventsList, setEventsList] = useState(DATA)

  const handleChange = (panelKey: string, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panelKey : "");
  };
  
  const handleDeleteEvent = (eventKey: string) => {
    const newList = eventsList.filter((element) => {
      return element.id !== eventKey;
    })
    setEventsList(newList);
  }

  return (
    <Fragment>
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