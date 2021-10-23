import IOwer from "../../models/IOwer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import React from "react";

interface IOwersTableProps {
  owers: IOwer[]
}

const OwersTable:React.FC<IOwersTableProps> = (props) => {
  return(
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Ower</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell/>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.owers.map((row) => (
          <TableRow key={row.participant.id}>
            <TableCell component="th" scope="row">
              {`${row.participant.firstName} ${row.participant.lastName}`}
            </TableCell>
            <TableCell>
              {`${row.costs}`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OwersTable;