import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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

const ListOfInterested = props => {
  const { rows, classes } = props;
  return (
    <div className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.interessado.nome}</TableCell>
              <TableCell>{row.interessado.email}</TableCell>
              <TableCell>{row.interessado.telefone}</TableCell>
              <TableCell>{row.interessado.celular}</TableCell>
              <TableCell>
                <NavLink to={`/lista-de-cartas/${row._id}`}>
                  <Button color="success">Detalhes</Button>
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

ListOfInterested.propTypes = {
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(ListOfInterested);
