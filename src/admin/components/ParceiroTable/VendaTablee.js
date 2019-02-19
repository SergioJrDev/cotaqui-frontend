import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Button from '../../components/CustomButtons/Button';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

const VendaTable = props => {
  const { rows, classes } = props;
  console.log(rows);
  return (
    <div className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Data de vencimento</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row._id}>
                <TableCell>{row.responsavel.nome}</TableCell>
                <TableCell>{row.responsavel.email}</TableCell>
                <TableCell>
                  {row.responsavel.celular || row.responsavel.telefone}
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  {moment(row.vencimento)
                    .add(1, 'day')
                    .format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <NavLink to={`venda/${row._id}`}>
                    <Button color='primary'>Visualizar</Button>
                  </NavLink>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

VendaTable.propTypes = {
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(VendaTable);
