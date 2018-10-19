import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CardBody from "../../components/Card/CardBody";
import TextField from "@material-ui/core/TextField";
import CurrencyInput from "../../../components/CurrencyInput/CurrencyInput";

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
    return (
      <div>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <TextField
                label="Administradora"
                id="administradora"
                fullWidth
                value={this.props.administradora}
                className="input-space"
                onChange={this.props.handleChange}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CurrencyInput
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
                value={this.props.observacoes}
                className="input-space"
                onChange={this.props.handleChange}
                fullWidth
              />
            </GridItem>
          </GridContainer>
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(CartasForm);
