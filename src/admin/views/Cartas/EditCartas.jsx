import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "./../../components/Grid/GridItem.jsx";
import GridContainer from "./../../components/Grid/GridContainer.jsx";
import Card from "./../../components/Card/Card.jsx";
import CardHeader from "./../../components/Card/CardHeader.jsx";
import moment from "moment";
import {
  getSingleCartaWithDetails,
  updateCarta,
  deleteCarta
} from "../../../services/cartas";
import CartasForm from "./CartasForm";
import { withRouter } from "react-router";
import Button from "../../components/CustomButtons/Button";
import CardFooter from "../../components/Card/CardFooter";
import _get from "lodash/get";

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
  type: "IMOVEL",
  administradora: "",
  credito: "",
  entrada: "",
  parcelas: "",
  valorDasParcelas: "",
  vencimento: moment(new Date()).format("YYYY-MM-DD"),
  observacoes: "",
  feitaPor: "feitapor@gmail.com",
  isFetching: false
};

class EditCards extends React.Component {
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
        params: { _id }
      }
    } = this.props;
    this.setState({ isFetching: true }, async () => {
      try {
        const { result } = await getSingleCartaWithDetails(_id);
        const { vencimento } = result;
        this.setState({
          ...result,
          vencimento: vencimento ? moment(vencimento).format("YYYY-MM-DD") : "",
          isFetching: false
        });
      } catch (error) {
        console.log("error", error);
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  handleUpdate = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        await updateCarta(this.state);
        this.fetchCarta();
      } catch (error) {
        console.log("error", error);
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  handleDelete = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        const { _id } = this.state;
        const { response } = await deleteCarta({ _id });
        return this.setState({ ...stateDefault }, () => {
          this.props.history.push("/lista-de-cartas");
        });
      } catch (error) {
        console.log("error", error);
        this.setState({
          ...stateDefault
        });
      }
    });
  };

  handleChange = ({ target: { value, id, name } }) => {
    const key = id || name;
    this.setState({ [key]: value });
  };

  handleRemoveInteressado = () => {
    this.setState(
      {
        ...this.state,
        interessado: {}
      },
      this.handleUpdate
    );
  };

  validateForm = () => {
    const {
      administradora,
      credito,
      entrada,
      parcelas,
      valorDasParcelas,
      vencimento
    } = this.state;

    return (
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
    const isDisabled = this.validateForm();
    const { isFetching } = this.state;
    const sharedPropsAndMethods = {
      ...this.state,
      handleChange: this.handleChange
    };
    console.log("th", this.state);
    const hasInteressed = _get(this.state, "interessado.nome");
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Editar carta contemplada
              </h4>
              <p className={classes.cardCategoryWhite}>
                Edite as informções da carta contemplada
              </p>
            </CardHeader>
            <CartasForm {...sharedPropsAndMethods} />
            <CardFooter>
              <div>
                <Button
                  onClick={this.handleUpdate}
                  disabled={isDisabled || isFetching}
                  color="primary"
                >
                  Salvar alterações
                </Button>
                {hasInteressed && (
                  <Button
                    color="warning"
                    onClick={this.handleRemoveInteressado}
                    disabled={isFetching}
                  >
                    Remover interessado
                  </Button>
                )}
              </div>
              <Button
                disabled={isFetching}
                onClick={this.handleDelete}
                color="danger"
              >
                Excluir Carta
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(withRouter(EditCards));
