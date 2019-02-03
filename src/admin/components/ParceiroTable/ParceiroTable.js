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

const ParceiroTable = props => {
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
            <TableCell>Data de criação</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row._id}>
                <TableCell>{row.nome_completo}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.telefone}</TableCell>
                <TableCell>{row.celular}</TableCell>
                <TableCell>{moment(row.data).format('DD/MM/YYYY')}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => props.onDeleteHandler(row._id)}
                    color='danger'
                  >
                    Apagar
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

ParceiroTable.propTypes = {
  rows: PropTypes.array.isRequired
};

export default withStyles(styles)(ParceiroTable);
