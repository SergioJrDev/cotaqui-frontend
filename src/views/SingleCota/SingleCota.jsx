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
import { getSingleCarta, updateCarta } from "../../services/cartas";
import CartaDetails from "../../components/CartaDetails/CartaDetails";

const stateDefault = {
  interessado: {
    name: "",
    email: "",
    phone: "",
    phone_mobile: "",
    details: null
  }
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
        this.setState({
          ...result,
          isFetching: false
        });
      } catch (error) {
        console.log("error", error);
        this.props.history.push("/cartas-contempladas");
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
        const { response } = await updateCarta(this.state);
        console.log("response", response);
        this.setState({
          ...stateDefault
        }),
          this.fetchCarta;
      } catch (error) {
        console.log("error", error);
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  validateForm = () => {
    const { interessado } = this.state;
    const { name, email, phone, phone_mobile } = interessado;
    const isPhoneValid = phone && phone.replace(/\D/g, "");
    const isPhoneMobileValid = phone_mobile && phone_mobile.replace(/\D/g, "");
    return (
      !name ||
      !email ||
      (isPhoneValid.length !== 10 && isPhoneMobileValid.length !== 11)
    );
  };

  render() {
    const { classes } = this.props;
    const { interessado } = this.state;
    const { name, email, phone, phone_mobile } = interessado;
    const isValid = this.validateForm();
    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <h1 className={classes.title}>Detalhes</h1>
              <GridContainer>
                <GridItem xs={12} md={4}>
                  <CartaDetails {...this.state} />
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
                      onClick={this.handleSubmit}
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
