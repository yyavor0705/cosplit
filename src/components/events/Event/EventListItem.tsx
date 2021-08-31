import {Accordion, AccordionDetails, AccordionSummary, Divider, Typography, AccordionActions, Button} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from '@material-ui/icons/Delete';

import styles from "./EventListItem.module.css"
import ShortDetailsTable from "./ShortDetailsTable/ShortDetailsTable";
import IOwer from "../../../models/IOwer";

interface IEventListItemProps {
  eventKey: string,
  expanded: boolean,
  summary: string,
  details: string,
  onChangeHandler: (itemKey: string, isExpanded: boolean) => void,
  shortDetailsData: IOwer[],
  onDelete: (eventKey: string) => void
}

const EventListItem: React.FC<IEventListItemProps> = (props) => {
  
  const changeHandler = (event: React.ChangeEvent<{}>, expanded: boolean) => {
    console.log(`return from changeHandler ${expanded}`);
    props.onChangeHandler(props.eventKey, expanded);
  }
  
  const deleteHandler = () => {
    props.onDelete(props.eventKey);
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
      <Divider />
      <AccordionActions>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={deleteHandler}>
          DELETE
        </Button>
      </AccordionActions>
    </Accordion>
  );
  
}

export default EventListItem;