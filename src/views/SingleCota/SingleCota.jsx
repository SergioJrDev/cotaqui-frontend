import React from "react";
import PageWrapper from "components/PageWrapper/PageWrapper";
import * as StyleDefault from "assets/jss/material-kit-react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Section from "components/Section/Section";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputMask from "./../../utils/InputMask";

const stateDefault = {
  name: "",
  email: "",
  phone: "",
  phone_mobile: "",
  details: null
};

const mockDetails = {
  name: "Bradesco",
  credit: "50.100",
  entry: "15.000",
  installments: "87",
  installmentsAmount: "532,00",
  dueDate: "10/07/2020",
  obs: "",
  avaliable: true
};

const borderBottom = {
  borderBottom: "1px solid #e0e0e0",
  marginBottom: 10
};

const DetailsLit = ({
  name,
  credit,
  entry,
  installments,
  installmentsAmount,
  dueDate,
  obs,
  avaliable
}) => (
  <div>
    {name && (
      <div style={borderBottom}>
        <span>Administradora:</span>
        <p>
          <strong>{name}</strong>
        </p>
      </div>
    )}
    {credit && (
      <div style={borderBottom}>
        <span>Crédito:</span>
        <p>
          <strong>{credit}</strong>
        </p>
      </div>
    )}
    {entry && (
      <div style={borderBottom}>
        <span>Entrada:</span>
        <p>
          <strong>{entry}</strong>
        </p>
      </div>
    )}
    {installments && (
      <div style={borderBottom}>
        <span>Parcelas</span>
        <p>
          <strong>{installments}</strong>
        </p>
      </div>
    )}
    {installmentsAmount && (
      <div style={borderBottom}>
        <span>Valor das Parcelas</span>
        <p>
          <strong>{installmentsAmount}</strong>
        </p>
      </div>
    )}
    {obs && (
      <div style={borderBottom}>
        <span>Observações</span>
        <p>
          <strong>{obs}</strong>
        </p>
      </div>
    )}
    {dueDate && (
      <div>
        <span>Validade</span>
        <p>
          <strong>{dueDate}</strong>
        </p>
      </div>
    )}
  </div>
);

class SingleCota extends React.Component {
  state = {
    id: null,
    ...stateDefault
  };

  componentDidMount = () => {
    this.fetchCota();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match !== this.props.match) {
      this.fetchCota();
    }
  };

  fetchCota = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.setState({ id, details: { ...mockDetails } });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    console.log("submit", this.state);
  };

  validateForm = () => {
    const { name, email, phone, phone_mobile } = this.state;
    const isPhoneValid = phone.replace(/\D/g, "");
    const isPhoneMobileValid = phone_mobile.replace(/\D/g, "");
    return (
      !name ||
      !email ||
      (isPhoneValid.length !== 10 && isPhoneMobileValid.length !== 11)
    );
  };

  render() {
    const { classes } = this.props;
    const { name, email, phone, phone_mobile, details } = this.state;
    const isValid = this.validateForm();

    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <h1 className={classes.title}>Detalhes</h1>
              <GridContainer>
                <GridItem xs={12} md={4}>
                  {details && <DetailsLit {...details} />}
                </GridItem>
                <GridItem xs={12} md={8}>
                  <form>
                    <p>
                      Preencha seus dados, em breve entraremos em contato com
                      você.
                    </p>
                    <TextField
                      id="name"
                      label="Nome"
                      name="name"
                      className={classes.textField}
                      value={name}
                      onChange={this.handleChange}
                      margin="normal"
                      fullWidth
                    />

                    <TextField
                      id="email"
                      label="E-mail"
                      name="email"
                      className={classes.textField}
                      value={email}
                      onChange={this.handleChange}
                      margin="normal"
                      fullWidth
                    />

                    <GridContainer>
                      <GridItem xs={6}>
                        <InputMask
                          id="phone"
                          label="Telefone"
                          name="phone"
                          className={classes.textField}
                          value={phone}
                          onChange={this.handleChange}
                          margin="normal"
                          fullWidth
                          mask="(99) 9999-9999"
                        />
                      </GridItem>

                      <GridItem xs={6}>
                        <InputMask
                          id="phone_mobile"
                          label="Celular"
                          name="phone_mobile"
                          className={classes.textField}
                          value={phone_mobile}
                          onChange={this.handleChange}
                          margin="normal"
                          fullWidth
                          mask="(99) 99999-9999"
                        />
                      </GridItem>
                    </GridContainer>
                    <Button
                      style={{ marginTop: 20 }}
                      disabled={isValid}
                      variant="contained"
                      color="primary"
                    >
                      Comprar
                    </Button>
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

export default withStyles(StyleDefault)(SingleCota);
