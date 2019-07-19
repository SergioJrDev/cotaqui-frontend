import React from "react";
import TextField from "@material-ui/core/TextField";
import GridItem from "./../../components/Grid/GridItem.jsx";
import GridContainer from "./../../components/Grid/GridContainer.jsx";
import Card from "./../../components/Card/Card.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeader from "./../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody";
import { getAllCartas } from "../../../services/cartas";
import TableList from "../../components/TableList/TableList";

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
  isFetching: false,
  results: [],
  search: "",
  hasFailed: false
};

class ListaDeCartas extends React.Component {
  state = {
    ...stateDefault
  };
  componentDidMount = () => this.fetchAllCartas();

  fetchAllCartas = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        const { response } = await getAllCartas();
        this.setState({ isFetching: false, results: response });
      } catch (error) {
        this.setState({ isFetching: false, hasFailed: true });
      }
    });
  };

  onChangeSearch = ({ target: { value } }) => {
    this.setState({
      search: value
    });
  };

  render() {
    const { classes } = this.props;
    const { results, search } = this.state;
    const resultsFiltered = search
      ? Object.values(results).filter(result => {
          const resultsString = JSON.stringify(result).toLowerCase();
          return resultsString.includes(search.toLowerCase());
        })
      : results;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Lista de Cartas</h4>
              <p className={classes.cardCategoryWhite}>
                Preencha as informções da carta contemplada
              </p>
            </CardHeader>
            <CardBody>
              {Object.values(results).length > 0 ? (
                <div>
                  <TextField
                    label="Filtrar"
                    id="ID"
                    onChange={this.onChangeSearch}
                    fullWidth
                    value={this.state.search}
                    className="input-space"
                  />
                  {Object.values(resultsFiltered).length > 0 ? (
                    <TableList rows={Object.values(resultsFiltered)} />
                  ) : (
                    <p>Nenhuma carta encontrada.</p>
                  )}
                </div>
              ) : (
                <p className="a-center">Nenhuma carta cadastrada ainda.</p>
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ListaDeCartas);
