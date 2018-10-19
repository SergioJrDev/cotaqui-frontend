import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import moment from "moment";
// import Button from "components/CustomButtons/Button.jsx";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const TableData = props => {
  const { rows } = props;
  return (
    <div style={{ overflow: "scroll" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Administradora</TableCell>
            <TableCell>Crédito</TableCell>
            <TableCell>Entrada</TableCell>
            <TableCell>Parcelas</TableCell>
            <TableCell>Valor das Parcelas</TableCell>
            <TableCell>Prox Vencimento</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.administradora}
                </TableCell>
                <TableCell>{row.credito}</TableCell>
                <TableCell>{row.entrada}</TableCell>
                <TableCell>{row.parcelas}</TableCell>
                <TableCell>{row.valorDasParcelas}</TableCell>
                <TableCell>
                  {moment(row.vencimento).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  {!row.interessado ? (
                    <NavLink to={`/cartas-contempladas/${row._id}`}>
                      <Button variant="contained" color="primary">
                        Comprar
                      </Button>
                    </NavLink>
                  ) : (
                    <Button disabled variant="contained" color="primary">
                      Reservada
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default withStyles(styles)(TableData);
