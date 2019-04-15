import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import CardBody from '../../components/Card/CardBody';
import TextField from '@material-ui/core/TextField';
import CurrencyInput from '../../../components/CurrencyInput/CurrencyInput';
import moment from 'moment';

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

class VendaForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Nome'
                fullWidth
                disabled
                value={this.props.responsavel.nome}
                className='input-space'
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='CPF'
                fullWidth
                disabled
                value={this.props.responsavel.cpf}
                className='input-space'
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Celular'
                fullWidth
                disabled
                value={this.props.responsavel.celular}
                className='input-space'
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Telefone'
                fullWidth
                disabled
                value={this.props.responsavel.telefone}
                className='input-space'
              />
            </GridItem>

            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='E-mail'
                fullWidth
                disabled
                value={this.props.responsavel.email}
                className='input-space'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Tipo'
                fullWidth
                disabled
                value={this.props.type}
                className='input-space'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Administradora'
                fullWidth
                disabled
                value={this.props.administradora}
                className='input-space'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Contemplado?'
                fullWidth
                disabled
                value={this.props.contemplado}
                className='input-space'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Cota'
                fullWidth
                disabled
                value={this.props.cota}
                className='input-space'
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label='Grupo'
                fullWidth
                disabled
                value={this.props.grupo}
                className='input-space'
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                disabled
                label='Crédito (R$)'
                value={this.props.credito}
                onChange={value => {
                  this.props.handleChange({
                    target: { value, name: 'credito' }
                  });
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                disabled
                label='Entrada (R$)'
                value={this.props.entrada}
                onChange={value => {
                  this.props.handleChange({
                    target: { value, name: 'entrada' }
                  });
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className='MuiFormControl-root-221 MuiFormControl-fullWidth-224 input-space'>
                <label
                  className='MuiFormLabel-root-368 MuiFormLabel-filled-372 MuiInputLabel-root-363 MuiInputLabel-formControl-364 MuiInputLabel-animated-367 MuiInputLabel-shrink-366'
                  data-shrink='true'
                  htmlFor='parcelas'
                >
                  Parcelas Pagas
                </label>
                <div className='MuiInput-root-225 MuiInput-fullWidth-232 MuiInput-formControl-226 MuiInput-underline-229'>
                  <TextField
                    id='parcelas'
                    fullWidth
                    disabled
                    type='number'
                    value={this.props.parcelasPagas}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className='MuiFormControl-root-221 MuiFormControl-fullWidth-224 input-space'>
                <label
                  className='MuiFormLabel-root-368 MuiFormLabel-filled-372 MuiInputLabel-root-363 MuiInputLabel-formControl-364 MuiInputLabel-animated-367 MuiInputLabel-shrink-366'
                  data-shrink='true'
                  htmlFor='parcelas'
                >
                  Parcelas Pendentes
                </label>
                <div className='MuiInput-root-225 MuiInput-fullWidth-232 MuiInput-formControl-226 MuiInput-underline-229'>
                  <TextField
                    id='parcelas'
                    fullWidth
                    disabled
                    type='number'
                    value={this.props.parcelasPendentes}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                label='Valor das parcelas'
                disabled
                onChange={() => {}}
                value={this.props.valorDasParcelas}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                label='Valor das pretendido'
                disabled
                onChange={() => {}}
                value={this.props.valorPretendido}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label='Prox Vencimento'
                id='vencimento'
                fullWidth
                disabled
                value={moment(this.props.vencimento)
                  .add(1, 'day')
                  .format('YYYY-MM-DD')}
                className='input-space'
                type='date'
              />
            </GridItem>
          </GridContainer>
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(VendaForm);
