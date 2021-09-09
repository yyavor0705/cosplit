import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableContainer from "@material-ui/core/TableContainer";
import React, {useEffect, useState} from "react";
import IOwerPayerMap from "../../models/IOwerPayerMap";

interface IOwerPayerProps {
  eventId: string
}

const OwerPayer: React.FC<IOwerPayerProps> = (props) => {
  const [owerPayerMap, setowerPayerMap] = useState<IOwerPayerMap[]>([])
  
  const loadOwerPayerMap = () => {
    console.log(`Load ower/payer data for ${props.eventId}`)
    owerPayerMap([
      {
        payer: {
          id: "5234",
          firstName: "UserNAme",
          lastName: "UserLastName"
        },
        owersMap: [
          {
            ower: {
              id: "523sdgf4",
              firstName: "UserOwer1",
              lastName: "UserOwer3LastName"
            },
            amount: 100
          },
          {
            ower: {
              id: "52346663sdgf4",
              firstName: "UserOwer2",
              lastName: "UserOwer54LastName"
            },
            amount: 65.5
          }
        ]
      }
    ]);
  }
  
  useEffect(() => {
    loadOwerPayerMap();
  }, []);
  
  return (
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
          {owerPayerMap.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {`${row.payer.firstName} ${row.payer.lastName}`}
              </TableCell>
              <TableCell>{row.target}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <Button variant="contained" startIcon={<EditIcon/>}>
                  EDIT
                </Button>
                <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwerPayer;