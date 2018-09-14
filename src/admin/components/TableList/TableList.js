import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import Button from "../../components/CustomButtons/Button";
import { NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const TableList = props => {
  const { rows, classes } = props;
  return (
    <div className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Administradora</TableCell>
            <TableCell>Crédito</TableCell>
            <TableCell>Entrada</TableCell>
            <TableCell>Parcelas</TableCell>
            <TableCell>Valor das Parcelas</TableCell>
            <TableCell>Prox. Vencimento</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.administradora}</TableCell>
              <TableCell>{row.credito}</TableCell>
              <TableCell>{row.entrada}</TableCell>
              <TableCell>{row.parcelas}</TableCell>
              <TableCell>{row.valorDasParcelas}</TableCell>
              <TableCell>
                {moment(row.vencimento).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell>
                <NavLink to={`/lista-de-cartas/${row._id}`}>
                  <Button color="primary">Detalhes</Button>
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

TableList.propTypes = {
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(TableList);
