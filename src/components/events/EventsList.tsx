import {Fragment, useState} from "react";
import EventListItem from "./Event/EventListItem";

const DATA = [
  {
    id: "ev1",
    title: "This is event 1",
    costs_data: [
      {
        id: 1,
        participantName: "user1",
        costs: -10.05
      },
      {
        id: 1,
        participantName: "user2",
        costs: 10.05
      },
      {
        id: 1,
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
        id: 1,
        participantName: "user12",
        costs: -104.05
      },
      {
        id: 1,
        participantName: "user22",
        costs: 140.05
      },
      {
        id: 1,
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
        id: 1,
        participantName: "user13",
        costs: -10.05
      },
      {
        id: 1,
        participantName: "user23",
        costs: -102.05
      },
      {
        id: 1,
        participantName: "user33",
        costs: 1844.05
      },
    ]
  }
]

const EventList: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState("");

  const handleChange = (panelKey: string, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panelKey : "");
  };

  return (
    <Fragment>
      {
        DATA.map(ev => {
            console.log("Expanded panel is " + expandedPanel)
            return (
              <EventListItem key={ev.id}
                             eventKey={ev.id}
                             expanded={expandedPanel === ev.id}
                             summary={ev.title}
                             details={"Details"}
                             onChangeHandler={handleChange}
                             shortDetailsData={ev.costs_data}
              />
            );
          }
        )
      }

    </Fragment>
  )
}

export default EventList;