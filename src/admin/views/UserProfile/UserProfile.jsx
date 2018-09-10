import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "./../../components/Grid/GridItem.jsx";
import GridContainer from "./../../components/Grid/GridContainer.jsx";
import Button from "./../../components/CustomButtons/Button.jsx";
import Card from "./../../components/Card/Card.jsx";
import CardHeader from "./../../components/Card/CardHeader.jsx";
import CardBody from "./../../components/Card/CardBody.jsx";
import CardFooter from "./../../components/Card/CardFooter.jsx";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import moment from "moment";
import CurrencyInput from "../../../components/CurrencyInput/CurrencyInput";

const currencies = [
  {
    value: "disponivel",
    label: "Disponível"
  },
  {
    value: "reservado",
    label: "Reservado"
  }
];

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

const stateDefault = {
  status: "disponivel",
  administradora: "",
  credito: "",
  entrada: "",
  parcelas: "",
  valorDasParcelas: "",
  vencimento: moment(new Date()).format("YYYY-MM-DD"),
  observacoes: ""
};

class UserProfile extends React.Component {
  state = {
    ...stateDefault
  };
  handleChange = ({ target: { value, id, name } }) => {
    const key = id || name;
    this.setState({ [key]: value });
  };

  handleSubmit = event => {
    console.log("submit", this.state);
    return false;
  };

  validateForm = () => {
    const {
      status,
      administradora,
      credito,
      entrada,
      parcelas,
      valorDasParcelas,
      vencimento
    } = this.state;

    return (
      !status ||
      !administradora ||
      !credito ||
      !entrada ||
      !parcelas ||
      !valorDasParcelas ||
      !vencimento
    );
  };

  render() {
    const { classes } = this.props;
    const isValidForm = this.validateForm();
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Criar carta contemplada
                </h4>
                <p className={classes.cardCategoryWhite}>
                  Preencha as informções da carta contemplada
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="status"
                      select
                      name="status"
                      label="Selecione o status da carta"
                      value={this.state.status}
                      className="input-space"
                      onChange={this.handleChange}
                      fullWidth
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      label="Administradora"
                      id="administradora"
                      fullWidth
                      value={this.state.administradora}
                      className="input-space"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <div className="MuiFormControl-root-221 MuiFormControl-fullWidth-224 input-space">
                      <label
                        className="MuiFormLabel-root-368 MuiInputLabel-root-363 MuiInputLabel-formControl-364 MuiInputLabel-animated-367"
                        data-shrink="false"
                        htmlFor="credito"
                      >
                        Crédito
                      </label>
                      <div className="MuiInput-root-225 MuiInput-fullWidth-232 MuiInput-formControl-226 MuiInput-underline-229">
                        <CurrencyInput
                          value={this.state.credito}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <CurrencyInput
                      value={this.state.credito}
                      onChange={this.handleChange}
                    />
                    <TextField
                      label="Crédito"
                      id="credito"
                      fullWidth
                      value={this.state.credito}
                      className="input-space"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      label="Entrada"
                      id="entrada"
                      fullWidth
                      value={this.state.entrada}
                      className="input-space"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      label="Parcelas"
                      id="parcelas"
                      fullWidth
                      value={this.state.parcelas}
                      className="input-space"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      label="Valor das Parcelas"
                      id="valorDasParcelas"
                      fullWidth
                      value={this.state.valorDasParcelas}
                      className="input-space"
                      onChange={this.handleChange}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      label="Prox Vencimento"
                      id="vencimento"
                      fullWidth
                      value={this.state.vencimento}
                      className="input-space"
                      onChange={this.handleChange}
                      type="date"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TextField
                      label="Observações"
                      id="observacoes"
                      value={this.state.observacoes}
                      className="input-space"
                      onChange={this.handleChange}
                      fullWidth
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={this.handleSubmit}
                  disabled={isValidForm}
                  color="primary"
                >
                  Criar{" "}
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(UserProfile);
