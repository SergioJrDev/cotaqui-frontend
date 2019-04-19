import React from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import * as StyleDefault from 'assets/jss/material-kit-react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Section from 'components/Section/Section';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputMask from './../../utils/InputMask';
import {
  getSingleCarta,
  updateCarta
  // submitEmail
} from '../../services/cartas';
import CartaDetails from '../../components/CartaDetails/CartaDetails';
import _get from 'lodash/get';
import TableWithResults from '../../components/TableWithResults/TableWithResults';

const stateDefault = {
  interessado: {
    nome: '',
    email: '',
    telefone: '',
    celular: '',
    details: ''
  },
  wasReserved: false,
  isAlreadyReserved: false
};

class SingleCota extends React.Component {
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
        params: { id }
      }
    } = this.props;
    this.setState({ isFetching: true }, async () => {
      try {
        const { result } = await getSingleCarta(id);
        const hasName = _get(result, 'interessado.nome');
        console.log('interessado', result, hasName);
        this.setState({
          ...result,
          isFetching: false,
          isAlreadyReserved: !!hasName
        });
      } catch (error) {
        console.log('error', error);
        this.props.history.push('/cartas-contempladas');
      }
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      interessado: {
        ...this.state.interessado,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        await updateCarta(this.state);
        this.setState(
          {
            ...stateDefault,
            wasReserved: true
          }
          // () => {
          //   submitEmail({
          //     to: "marcelo@multtrade.com",
          //     message: "Nova pessoa interessada em uma carta do site CotAqui Online.",
          //     subject: "Alguém interessado numa carta contemplada. "
          //   }).catch(error => console.log("Erro ao enviar e-mail", error));
          // }
        );
      } catch (error) {
        console.log('error', error);
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  validateForm = () => {
    const { interessado } = this.state;
    const { nome, email, telefone, celular } = interessado;
    const isPhoneValid = telefone && telefone.replace(/\D/g, '');
    const isPhoneMobileValid = celular && celular.replace(/\D/g, '');
    return (
      !nome ||
      !email ||
      (isPhoneValid.length !== 10 && isPhoneMobileValid.length !== 11)
    );
  };

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const { classes } = this.props;
    const { interessado, wasReserved, isAlreadyReserved } = this.state;
    const { nome, email, telefone, celular } = interessado;
    const isValid = this.validateForm();
    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <h1 className={classes.title}>Detalhes</h1>
              <GridContainer>
                <GridItem xs={12} md={4}>
                  <CartaDetails
                    {...this.state}
                    id={id.slice(id.length - 5, id.length)}
                  />
                </GridItem>
                <GridItem xs={12} md={8}>
                  {isAlreadyReserved && (
                    <div>
                      <p>Está carta já reservada. Veja outras nossa lista.</p>
                      <TableWithResults />
                    </div>
                  )}
                  {wasReserved && !isAlreadyReserved && (
                    <p>
                      Obrigado, seu interesse foi registrada. Em breve
                      entraremos em contato com você.
                    </p>
                  )}
                  {!wasReserved && !isAlreadyReserved && (
                    <form>
                      <p>
                        Preencha seus dados, em breve entraremos em contato com
                        você.
                      </p>
                      <TextField
                        id='name'
                        label='Nome'
                        name='nome'
                        className={classes.textField}
                        value={nome}
                        onChange={this.handleChange}
                        margin='normal'
                        fullWidth
                      />

                      <TextField
                        id='email'
                        label='E-mail'
                        name='email'
                        className={classes.textField}
                        value={email}
                        onChange={this.handleChange}
                        margin='normal'
                        fullWidth
                      />

                      <GridContainer>
                        <GridItem xs={6}>
                          <InputMask
                            id='telefone'
                            label='Telefone'
                            name='telefone'
                            className={classes.textField}
                            value={telefone || ''}
                            onChange={this.handleChange}
                            margin='normal'
                            fullWidth
                            mask='(99) 9999-9999'
                          />
                        </GridItem>

                        <GridItem xs={6}>
                          <InputMask
                            id='celular'
                            label='Celular'
                            name='celular'
                            className={classes.textField}
                            value={celular || ''}
                            onChange={this.handleChange}
                            margin='normal'
                            fullWidth
                            mask='(99) 99999-9999'
                          />
                        </GridItem>
                      </GridContainer>
                      <Button
                        style={{ marginTop: 20 }}
                        disabled={isValid}
                        variant='contained'
                        color='primary'
                        onClick={this.handleSubmit}
                      >
                        Comprar
                      </Button>
                    </form>
                  )}
                </GridItem>
              </GridContainer>
            </div>
          </Section>
        </div>
      </PageWrapper>
    );
  }
}

export default withStyles(StyleDefault)(SingleCota);
