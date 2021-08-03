import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, {useState} from "react";

import styles from "./EventListItem.module.css"

export interface IEventListItemProps {
  eventKey: string,
  expanded: boolean,
  summary: string,
  details: string,
  onChangeHandler: (itemKey: string, isExpanded: boolean) => void
}

const EventListItem: React.FC<IEventListItemProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const changeHandler = () => {
    setIsExpanded(prevState => {
      console.log(prevState);
      console.log(!prevState);
      return true;
    });
    console.log(isExpanded);
    props.onChangeHandler(props.eventKey, isExpanded);
  }

  return (
    <Accordion className={styles.EventListItem} expanded={props.expanded} onChange={changeHandler}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
      >
        <Typography>{props.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );

}

export default EventListItem;