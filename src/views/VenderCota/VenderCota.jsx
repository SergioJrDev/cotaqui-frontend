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
import { createSale } from '../../services/parceiro';
import CurrencyInput from '../../components/CurrencyInput/CurrencyInput';

const stateDefault = {
  isSubmiting: false,
  isSuccess: false,
  venda: {
    type: 'IMOVEL',
    administradora: 'Itau',
    credito: 0,
    parcelasPendentes: 0,
    parcelasPagas: 0,
    valorDasParcelas: 0,
    valorPretendido: 0,
    grupo: 'Grupo 1',
    cota: 'Cota 1',
    contemplado: true,
    entrada: 0,
    vencimento: '2020-01-01',
    responsavel: {
      nome: 'Sérgio Júnior',
      cpf: '411.494.038-37',
      telefone: '(11) 2233-1122',
      celular: '(11) 3344-6677',
      email: 'sergioamjr91@gmail.com'
    }
  }
};

class VenderCota extends React.Component {
  state = {
    ...stateDefault
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      venda: {
        ...this.state.venda,
        [name]: value
      }
    });
  };

  handleChangeResponsable = ({ target: { name, value } }) => {
    this.setState({
      venda: {
        ...this.state.venda,
        responsavel: {
          ...this.state.venda.responsavel,
          [name]: value
        }
      }
    });
  };

  handleSubmit = () => {
    this.setState({ isSubmiting: true }, async () => {
      try {
        await createSale({ venda: this.state.venda });
        this.setState({
          ...stateDefault,
          isSuccess: true
        });
      } catch (error) {
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  validateForm = () => {
    const { parceiro } = this.state;
    const { nome_completo, email, telefone, celular } = parceiro;
    const isPhoneValid = telefone && telefone.replace(/\D/g, '');
    const isPhoneMobileValid = celular && celular.replace(/\D/g, '');
    return (
      !nome_completo ||
      !email ||
      (isPhoneValid.length !== 10 && isPhoneMobileValid.length !== 11)
    );
  };

  render() {
    const { classes } = this.props;
    const { isSuccess } = this.state;
    const isValid = true;

    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <h1 className={classes.title}>Quero Vender uma cota</h1>
              <GridContainer>
                <GridItem>
                  <form>
                    <p>
                      Se você possui uma cota de consórcio contemplada ou não e
                      deseja vender, preencha todos os dados do formulário
                      abaixo que estaremos entrando em contato.
                    </p>

                    <p>
                      <strong>
                        Preencha o formulário abaixo, se torne nosso parceiro e
                        comece a receber oportunidades e informações
                        relacionadas a consórcios contemplados.
                      </strong>
                    </p>
                    {isSuccess ? (
                      <p className='a-center background-success color-white br-5 p-5'>
                        Cadastro feito com sucesso. Em breve entraremos em
                        contato com você.
                      </p>
                    ) : (
                      <div>
                        <TextField
                          id='nome'
                          label='Nome Completo'
                          name='nome'
                          className={classes.textField}
                          value={this.state.venda.responsavel.nome}
                          onChange={this.handleChangeResponsable}
                          margin='normal'
                          fullWidth
                        />

                        <TextField
                          id='email'
                          label='E-mail'
                          name='email'
                          className={classes.textField}
                          value={this.state.venda.responsavel.email}
                          onChange={this.handleChangeResponsable}
                          margin='normal'
                          fullWidth
                        />
                        <InputMask
                          id='cpf'
                          label='CPF'
                          name='cpf'
                          className={classes.textField}
                          value={this.state.venda.responsavel.cpf || ''}
                          onChange={this.handleChangeResponsable}
                          margin='normal'
                          fullWidth
                          mask='999.999.999-99'
                        />

                        <GridContainer>
                          <GridItem xs={6}>
                            <InputMask
                              id='telefone'
                              label='Telefone'
                              name='telefone'
                              className={classes.textField}
                              value={
                                this.state.venda.responsavel.telefone || ''
                              }
                              onChange={this.handleChangeResponsable}
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
                              value={this.state.venda.responsavel.celular || ''}
                              onChange={this.handleChangeResponsable}
                              margin='normal'
                              fullWidth
                              mask='(99) 99999-9999'
                            />
                          </GridItem>
                        </GridContainer>
                        <GridContainer>
                          <GridItem xs={6}>
                            <TextField
                              id='type'
                              label='Tipo'
                              name='type'
                              className={classes.textField}
                              value={this.state.venda.type}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='administradora'
                              label='Administradora'
                              name='administradora'
                              className={classes.textField}
                              value={this.state.venda.administradora}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <CurrencyInput
                              id='credito'
                              label='Crédito'
                              name='credito'
                              className={classes.textField}
                              value={this.state.venda.credito}
                              onChange={value =>
                                this.handleChange({
                                  target: { name: 'credito', value }
                                })
                              }
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='parcelasPendentes'
                              label='Parcelas Pendentes'
                              name='parcelasPendentes'
                              className={classes.textField}
                              value={this.state.venda.parcelasPendentes}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <CurrencyInput
                              id='valorDasParcelas'
                              label='valorDasParcelas'
                              name='valorDasParcelas'
                              className={classes.textField}
                              value={this.state.venda.valorDasParcelas}
                              onChange={value =>
                                this.handleChange({
                                  target: { name: 'valorDasParcelas', value }
                                })
                              }
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <CurrencyInput
                              id='valorPretendido'
                              label='valorPretendido'
                              name='valorPretendido'
                              className={classes.textField}
                              value={this.state.venda.valorPretendido}
                              onChange={value =>
                                this.handleChange({
                                  target: { name: 'valorPretendido', value }
                                })
                              }
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='grupo'
                              label='grupo'
                              name='grupo'
                              className={classes.textField}
                              value={this.state.venda.grupo}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='cota'
                              label='cota'
                              name='cota'
                              className={classes.textField}
                              value={this.state.venda.cota}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            {/* <TextField
                              id='contemplado'
                              label='contemplado'
                              name='contemplado'
                              className={classes.textField}
                              value={}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            /> */}
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='entrada'
                              label='entrada'
                              name='entrada'
                              className={classes.textField}
                              value={this.state.venda.entrada}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                            />
                          </GridItem>
                          <GridItem xs={6}>
                            <TextField
                              id='vencimento'
                              label='vencimento'
                              name='vencimento'
                              className={classes.textField}
                              value={this.state.venda.vencimento}
                              onChange={this.handleChange}
                              margin='normal'
                              fullWidth
                              type='date'
                            />
                          </GridItem>
                        </GridContainer>
                        <Button
                          style={{ marginTop: 20 }}
                          variant='contained'
                          color='primary'
                          disabled={!isValid || this.state.isSubmiting}
                          onClick={this.handleSubmit}
                        >
                          Enviar
                        </Button>
                      </div>
                    )}
                  </form>
                </GridItem>
              </GridContainer>
            </div>
          </Section>
        </div>
      </PageWrapper>
    );
  }
}

export default withStyles(StyleDefault)(VenderCota);
