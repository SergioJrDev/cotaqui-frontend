import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from './../../components/Grid/GridItem.jsx';
import GridContainer from './../../components/Grid/GridContainer.jsx';
import Card from './../../components/Card/Card.jsx';
import CardHeader from './../../components/Card/CardHeader.jsx';
import moment from 'moment';
import {
  getSingleCartaWithDetails,
  deleteCarta
} from '../../../services/cartas';

import { withRouter } from 'react-router';
import Button from '../../components/CustomButtons/Button';
import CardFooter from '../../components/Card/CardFooter';
import _get from 'lodash/get';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import VendaForm from './VendaForm';
import { getSingleSale, deleteSale } from '../../../services/parceiro';

const styles = theme => ({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const stateDefault = {
  data: {
    type: 'IMOVEL',
    administradora: 'Itau',
    credito: 0,
    parcelasPendentes: 0,
    parcelasPagas: 0,
    valorDasParcelas: 0,
    valorPretendido: 0,
    grupo: 'Grupo 1',
    cota: 'Cota 1',
    contemplado: '',
    entrada: 0,
    vencimento: '2020-01-01',
    responsavel: {
      nome: 'Sérgio Júnior',
      cpf: '411.494.038-37',
      telefone: '(11) 2233-1122',
      celular: '(11) 3344-6677',
      email: 'sergioamjr91@gmail.com'
    }
  },
  isFetching: false
};

class VendaSingle extends React.Component {
  state = {
    ...stateDefault
  };

  componentDidMount = () => {
    this.fetchCarta();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match !== this.props.match) {
      this.fetchCarta();
    }
  };

  fetchCarta = () => {
    const {
      match: {
        params: { _id }
      }
    } = this.props;
    this.setState({ isFetching: true }, async () => {
      try {
        const result = await getSingleSale(_id);
        this.setState({
          data: {
            ...this.state.data,
            ...result[0]
          },
          isFetching: false
        });
        console.log('insi', this.state.data);
      } catch (error) {
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  handleDelete = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        const { _id } = this.props.match.params;

        await deleteSale({ _id });
        toast.success('Carta deletada com sucesso.');
        this.props.history.push('/lista-de-vendas');
        // return this.setState({ ...stateDefault }, () => {
        // });
      } catch (error) {
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  validateForm = () => {
    const {
      administradora,
      credito,
      entrada,
      parcelas,
      valorDasParcelas,
      vencimento
    } = this.state;

    return (
      !administradora ||
      !credito ||
      !entrada ||
      !parcelas ||
      !valorDasParcelas ||
      !vencimento
    );
  };

  onBackHandler = () => {
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;
    const isDisabled = this.validateForm();
    const { isFetching } = this.state;
    const sharedPropsAndMethods = {
      ...this.state.data
    };

    return (
      <GridContainer>
        <ToastContainer />
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>Detalhes da venda</h4>
              <p className={classes.cardCategoryWhite}>
                Veja detalhes da venda cadastrada.
              </p>
            </CardHeader>
            <VendaForm {...sharedPropsAndMethods} />
            <CardFooter>
              <div>
                <Button onClick={this.onBackHandler} disabled={isFetching}>
                  Cancelar
                </Button>
              </div>
              <Button
                disabled={isFetching}
                onClick={this.handleDelete}
                color='danger'
              >
                Excluir Carta
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(withRouter(VendaSingle));
