import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "./EventListItem.module.css"
import ShortDetailsTable from "./ShortDetailsTable/ShortDetailsTable";
import {IShortDetailsData} from "../../../models/IShortDetailsData";

interface IEventListItemProps {
  eventKey: string,
  expanded: boolean,
  summary: string,
  details: string,
  onChangeHandler: (itemKey: string, isExpanded: boolean) => void,
  shortDetailsData: IShortDetailsData[]
}

const EventListItem: React.FC<IEventListItemProps> = (props) => {
  
  const changeHandler = (event: React.ChangeEvent<{}>, expanded: boolean) => {
    console.log(`return from changeHandler ${expanded}`);
    props.onChangeHandler(props.eventKey, expanded);
  }
  
  return (
    <Accordion className={styles.EventListItem} expanded={props.expanded} onChange={changeHandler}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
      >
        <Typography>{props.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.Details}>
        <ShortDetailsTable shortDetailsData={props.shortDetailsData}/>
      </AccordionDetails>
    </Accordion>
  );
  
}

export default EventListItem;