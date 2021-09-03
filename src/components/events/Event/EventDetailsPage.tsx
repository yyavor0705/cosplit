import {useParams} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from "react";
import IEventFullData from "../../../models/IEventFullData";
import IEventParticipant from "../../../models/IEventParticipant";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import IEventExpenses from "../../../models/IEventExpenses";
import {Typography} from "@material-ui/core";
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from "@material-ui/icons/Delete";

interface QuizParams {
  id: string;
}

const EventDetailsPage = () => {
  const [eventData, setEventData] = useState<IEventFullData | null>(null);
  const [eventExpenses, setEventExpanses] = useState<IEventExpenses[]>([])
  const {id: eventID} = useParams<QuizParams>();
  
  const loadEventExpenses = () => {
    setEventExpanses([
      {
        id: "44554",
        payer: {
          id: "5234",
          firstName: "UserNAme",
          lastName: "UserLastName"
        },
        target: "Meat",
        amount: 102.3
      },
      {
        id: "42244",
        payer: {
          id: "5234",
          firstName: "UserNAme",
          lastName: "UserLastName"
        },
        target: "Meat",
        amount: 105.3
      },
      {
        id: "4434",
        payer: {
          id: "5234",
          firstName: "UserNAme",
          lastName: "UserLastName"
        },
        target: "Meat",
        amount: 104.3
      }
    ]);
  }
  
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
    loadEventExpenses();
  }, []);
  
  return (
    <Fragment>
      <Typography variant="h4" component="h4">
        {eventData?.title}
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Participant</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell/>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventExpenses.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {`${row.payer.firstName} ${row.payer.lastName}`}
                </TableCell>
                <TableCell>{row.target}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Button variant="contained" startIcon={<EditIcon />}>
                    EDIT
                  </Button>
                  <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default EventDetailsPage;