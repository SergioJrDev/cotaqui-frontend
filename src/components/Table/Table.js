import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
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

const rows = [
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: true
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: true
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: true
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: true
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: false
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: false
  },
  {
    name: "Bradesco",
    credit: "50.100",
    entry: "15.000",
    installments: "87",
    installmentsAmount: "532,00",
    dueDate: "10/07/2020",
    obs: "",
    avaliable: true
  }
];

const TableData = props => {
  // const { classes } = props;
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
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.credit}</TableCell>
                <TableCell>{row.entry}</TableCell>
                <TableCell>{row.installments}</TableCell>
                <TableCell>{row.installmentsAmount}</TableCell>
                <TableCell>{row.dueDate}</TableCell>
                <TableCell>
                  {row.avaliable ? (
                    <NavLink to="/cartas-contempladas/123122">
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
