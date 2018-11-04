import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import Button from "../../components/CustomButtons/Button";
import CardFooter from "../../components/Card/CardFooter";
import UserForm from "./UserForm";
import { Login as LoginService } from "../../../services/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { LocalStorage } from "../../../services/index";

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
  email: "",
  password: "",
  isSubmiting: false
};

class Login extends React.Component {
  state = {
    ...stateDefault
  };

  handleSubmit = () => {
    this.setState(
      {
        isSubmiting: true
      },
      async () => {
        try {
          const { email, password } = this.state;
          const { data } = await LoginService({ email, password });
          await LocalStorage.setKey({ ...data, email });
          this.props.history.push("/lista-de-cartas");
        } catch (error) {
          const { errorMessage = "Erro ao fazer login" } = error;
          toast.error(errorMessage);
          this.setState({ ...stateDefault });
        }
      }
    );
  };

  handleChange = ({ target: { value, id, name } }) => {
    const key = id || name;
    this.setState({ [key]: value });
  };

  validateForm = () => {
    const { password, email, isSubmiting } = this.state;

    return !email || !password || isSubmiting;
  };

  render() {
    const { classes } = this.props;
    const isDisabled = this.validateForm();
    const sharedPropsAndMethods = {
      ...this.state,
      handleChange: this.handleChange
    };
    return (
      <div className="login-page login">
        <div className="login-container">
          <ToastContainer />
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Fazer Login</h4>
                  <p className={classes.cardCategoryWhite}>
                    Entre com seu e-mail e senha.
                  </p>
                </CardHeader>
                <UserForm {...sharedPropsAndMethods} hideName />
                <CardFooter>
                  <Button
                    onClick={this.handleSubmit}
                    disabled={isDisabled}
                    color="primary"
                  >
                    Entrar
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
