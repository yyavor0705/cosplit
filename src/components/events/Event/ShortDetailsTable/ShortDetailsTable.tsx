import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {IShortDetailsData} from "../../../../models/IShortDetailsData";

interface Props {
  shortDetailsData: IShortDetailsData[]
}

const ShortDetailsTable: React.FC<Props> = (props) => {
  
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Participant</TableCell>
            <TableCell>Costs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.shortDetailsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.participantName}
              </TableCell>
              <TableCell>{row.costs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShortDetailsTable;