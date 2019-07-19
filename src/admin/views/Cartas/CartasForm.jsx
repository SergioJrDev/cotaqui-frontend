import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CardBody from "../../components/Card/CardBody";
import TextField from "@material-ui/core/TextField";
import CurrencyInput from "../../../components/CurrencyInput/CurrencyInput";
import _get from "lodash/get";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class CartasForm extends React.Component {
  render() {
    const hasInteressed = _get(this.props, "interessado.nome", false);
    return (
      <div>
        <CardBody>
          <GridContainer>
            {this.props.id && (
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  label="ID"
                  id="ID"
                  fullWidth
                  disabled
                  value={this.props.id.toUpperCase()}
                  className="input-space"
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                label="Administradora"
                id="administradora"
                fullWidth
                disabled={!!hasInteressed}
                value={this.props.administradora}
                className="input-space"
                onChange={this.props.handleChange}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div classes="full-width_">
                <FormControl>
                  <InputLabel htmlFor="age-simple">Tipo</InputLabel>
                  <Select
                    autoWidth={true}
                    value={this.props.type}
                    onChange={e => {
                      this.props.handleChange({
                        target: { value: e.target.value, name: "type" }
                      });
                    }}
                    inputProps={{
                      name: "age",
                      id: "age-simple"
                    }}
                  >
                    <MenuItem value="IMOVEL">IMOVEL</MenuItem>
                    <MenuItem value="CARRO">CARRO</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                disabled={!!hasInteressed}
                label="Crédito (R$)"
                value={this.props.credito}
                onChange={value => {
                  this.props.handleChange({
                    target: { value, name: "credito" }
                  });
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                disabled={!!hasInteressed}
                label="Entrada (R$)"
                value={this.props.entrada}
                onChange={value => {
                  this.props.handleChange({
                    target: { value, name: "entrada" }
                  });
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className="MuiFormControl-root-221 MuiFormControl-fullWidth-224 input-space">
                <label
                  className="MuiFormLabel-root-368 MuiFormLabel-filled-372 MuiInputLabel-root-363 MuiInputLabel-formControl-364 MuiInputLabel-animated-367 MuiInputLabel-shrink-366"
                  data-shrink="true"
                  htmlFor="parcelas"
                >
                  Parcelas
                </label>
                <div className="MuiInput-root-225 MuiInput-fullWidth-232 MuiInput-formControl-226 MuiInput-underline-229">
                  <TextField
                    id="parcelas"
                    fullWidth
                    disabled={!!hasInteressed}
                    type="number"
                    value={this.props.parcelas}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
                label="Valor das parcelas"
                disabled={!!hasInteressed}
                value={this.props.valorDasParcelas}
                onChange={value => {
                  this.props.handleChange({
                    target: { value, name: "valorDasParcelas" }
                  });
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Prox Vencimento"
                id="vencimento"
                fullWidth
                disabled={!!hasInteressed}
                value={this.props.vencimento}
                className="input-space"
                onChange={this.props.handleChange}
                type="date"
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Observações"
                id="observacoes"
                disabled={!!hasInteressed}
                value={this.props.observacoes}
                className="input-space"
                onChange={this.props.handleChange}
                fullWidth
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              {(this.props.opcoesDeParcelas || []).map((value, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <TextField
                      label="Nova Parcela"
                      id="opcoesDeParcelas"
                      fullWidth
                      disabled={!!hasInteressed}
                      value={value}
                      className="input-space"
                      onChange={value =>
                        this.props.handleChangeOpcoes(value, index)
                      }
                    />
                    {!hasInteressed && (
                      <Button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.props.removeNewOpcao(index)}
                      >
                        Remover
                      </Button>
                    )}
                  </div>
                );
              })}
              {!hasInteressed && (
                <Button
                  color="warning"
                  style={{ marginBottom: "20px" }}
                  disabled={!!hasInteressed}
                  onClick={this.props.addNewOpcao}
                >
                  Adicionar Parcela
                </Button>
              )}
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.nova}
                    onChange={e => {
                      this.props.handleChange({
                        target: {
                          name: "nova",
                          value: e.target.checked
                        }
                      });
                    }}
                    id="nova"
                    name="nova"
                    disabled={!!hasInteressed}
                  />
                }
                label="É nova?"
              />
            </GridItem>
          </GridContainer>
          {!!hasInteressed && (
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Nome"
                  id="nome"
                  disabled
                  value={this.props.interessado.nome}
                  className="input-space"
                  onChange={this.props.handleChange}
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="E-mail"
                  id="email"
                  disabled
                  value={this.props.interessado.email}
                  className="input-space"
                  onChange={this.props.handleChange}
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Celular"
                  id="celular"
                  disabled
                  value={this.props.interessado.celular}
                  className="input-space"
                  onChange={this.props.handleChange}
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  label="Telefone"
                  id="telefone"
                  disabled
                  value={this.props.interessado.telefone}
                  className="input-space"
                  onChange={this.props.handleChange}
                  fullWidth
                />
              </GridItem>
            </GridContainer>
          )}
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(CartasForm);
