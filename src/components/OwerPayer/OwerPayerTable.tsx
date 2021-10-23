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
import OwersTable from "./OwersTable";

interface IOwerPayerProps {
  eventId: string
}

const OwerPayer: React.FC<IOwerPayerProps> = (props) => {
  const [owerPayerMapList, setOwerPayerMapList] = useState<IOwerPayerMap[]>([])
  
  const loadOwerPayerMap = () => {
    console.log(`Load ower/payer data for ${props.eventId}`)
    setOwerPayerMapList([
      {
        payer: {
          id: "5234",
          firstName: "UserNAme",
          lastName: "UserLastName"
        },
        owersList: [
          {
            participant: {
              id: "523sdgf4",
              firstName: "UserOwer1",
              lastName: "UserOwer3LastName"
            },
            costs: 100
          },
          {
            participant: {
              id: "523232323sdgf4",
              firstName: "UserOwer3",
              lastName: "Us11111LastName"
            },
            costs: 34.4
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
            <TableCell>Payer</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {owerPayerMapList.map((row) => (
            <TableRow key={row.payer.id}>
              <TableCell component="th" scope="row">
                {`${row.payer.firstName} ${row.payer.lastName}`}
              </TableCell>
              <TableCell>
                <OwersTable owers={row.owersList} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwerPayer;