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
import { createParceiro } from '../../services/parceiro';

const stateDefault = {
  isSubmiting: false,
  isSuccess: false,
  parceiro: {
    nome_completo: '',
    email: '',
    telefone: '',
    celular: '',
    data: new Date()
  }
};

class Parceiro extends React.Component {
  state = {
    ...stateDefault
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      parceiro: {
        ...this.state.parceiro,
        [name]: value
      }
    });
  };

  handleSubmit = () => {
    this.setState({ isSubmiting: true }, async () => {
      try {
        await createParceiro(this.state.parceiro);
        this.setState(
          {
            ...stateDefault,
            isSuccess: true
          }
          // () => {
          //   submitEmail({
          //     to: 'sergioamjr91@gmail.com',
          //     message: 'Nova carta registrada no site.',
          //     subject: 'Carta Registrada. '
          //   }).catch(error => console.log('Erro ao enviar e-mail', error));
          // }
        );
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
    const { parceiro, isSuccess } = this.state;
    const isValid = this.validateForm();
    const { nome_completo, email, telefone, celular } = parceiro;

    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <h1 className={classes.title}>Seja nosso parceiro</h1>
              <GridContainer>
                <GridItem>
                  <form>
                    <p>
                      Preencha seus dados, em breve entraremos em contato com
                      você.
                    </p>
                    <p>
                      Você que é profissional do segmento de consórcios,
                      construtor ou corretor de imóveis, concessionária ou
                      lojista de veículos ou que atua no segmento financeiro na
                      busca de soluções em créditos ou similares, temos um
                      atendimento diferenciado a você.
                    </p>
                    <p>
                      Aumente suas vendas e possiblidades de negócios ofertando
                      aos seus clientes nossas cartas contempladas. Assim terá a
                      oportunidade de aumentar seus rendimentos agregando sua
                      comissão ao nosso valor de entrada. Oferecemos todo o
                      suporte e retaguarda necessária para que você, de forma
                      independente, realize suas vendas.
                    </p>
                    <p>
                      Garantimos um excelente produto aos seus clientes. Se
                      estiver comprometido em realizar um trabalho de forma
                      profissional, transparente e muito segura para todos os
                      envolvidos, seja muito bem vindo!!!
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
                          id='nome_completo'
                          label='Nome Completo'
                          name='nome_completo'
                          className={classes.textField}
                          value={nome_completo}
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
                          variant='contained'
                          color='primary'
                          disabled={isValid || this.state.isSubmiting}
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

export default withStyles(StyleDefault)(Parceiro);
