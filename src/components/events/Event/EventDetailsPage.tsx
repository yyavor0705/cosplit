import {useParams} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from "react";
import IEventFullData from "../../../models/IEventFullData";
import IEventExpenses from "../../../models/IEventExpenses";
import {Typography} from "@material-ui/core";
import ExpensesTable from "../../Expenses/ExpensesTable";

interface QuizParams {
  id: string;
}

const EventDetailsPage = () => {
  const [eventData, setEventData] = useState<IEventFullData | null>(null);
  const [eventExpenses, setEventExpanses] = useState<IEventExpenses[]>([])
  const {id: eventID} = useParams<QuizParams>();
  
  const loadEventFullData = () => {
    setEventData({
        id: "123",
        title: "This is the best party",
        creator: {
          id: "userid1",
          firstName: "Yura",
          lastName: "Yav"
        }
      }
    );
  }
  
  useEffect(() => {
    loadEventFullData();
  }, []);
  
  return (
    <Fragment>
      <Typography variant="h4" component="h4">
        {eventData?.title}
      </Typography>
      <ExpensesTable id={eventID}/>

    </Fragment>
  );
};

export default EventDetailsPage;