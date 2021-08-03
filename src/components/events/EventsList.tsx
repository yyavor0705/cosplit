import {Fragment, useState} from "react";
import EventListItem from "./Event/EventListItem";

const DATA = [
  {
    id: "ev1",
    title: "This is event 1",
    costs_data: {
      "user1": -10.05,
      "user2": -20,
      "user3": 10
    }
  },
  {
    id: "ev2",
    title: "This is event 2",
    costs_data: {
      "user1": -120.05,
      "user2": 201,
      "user3": -12
    }
  },
  {
    id: "ev3",
    title: "This is event 3",
    costs_data: {
      "user1": -11.05,
      "user2": -24,
      "user3": 15
    }
  }
]

const EventList: React.FC = (props) => {
  const [expandedPanel, setExpanded] = useState("");

  const handleChange = (panelKey: string, isExpanded: boolean) => {
    console.log(`Handle change ${panelKey} ${isExpanded}`);
    setExpanded(isExpanded ? panelKey : "");
    console.log(`New panel : ${expandedPanel}`)
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
                             onChangeHandler={handleChange}/>
            );
          }
        )
      }

    </Fragment>
  )
}

export default EventList;