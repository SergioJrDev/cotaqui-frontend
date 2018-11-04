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
import { CreateUser } from "../../../services/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
  name: "",
  email: "",
  password: "",
  isSubmiting: false
};

class CriarUsuario extends React.Component {
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
          const { isSubmiting, ...user } = this.state;
          await CreateUser(user);
          toast.success("Usuário criado com sucesso.");
          this.setState({ ...stateDefault });
        } catch (error) {
          toast.error("Erro ao criar usuário");
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
    const { name, password, email, isSubmiting } = this.state;

    return !name || !email || !password || isSubmiting;
  };

  render() {
    const { classes } = this.props;
    const isDisabled = this.validateForm();
    const sharedPropsAndMethods = {
      ...this.state,
      handleChange: this.handleChange
    };
    return (
      <div>
        <ToastContainer />
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Criar novo usuário</h4>
                <p className={classes.cardCategoryWhite}>
                  Preencha as informções do novo usuário
                </p>
              </CardHeader>
              <UserForm {...sharedPropsAndMethods} />
              <CardFooter>
                <Button
                  onClick={this.handleSubmit}
                  disabled={isDisabled}
                  color="primary"
                >
                  Criar
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(CriarUsuario);
