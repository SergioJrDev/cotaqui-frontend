import React from "react";
import GridItem from "./../../components/Grid/GridItem.jsx";
import GridContainer from "./../../components/Grid/GridContainer.jsx";
import Card from "./../../components/Card/Card.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeader from "./../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody";
import { getInteressados } from "../../../services/cartas";
import TableList from "../../components/TableList/TableList";
import ListOfInterested from "../../components/ListOfInterested/ListOfInterested";

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
  hasFailed: false
};

class ListaDeInteressados extends React.Component {
  state = {
    ...stateDefault
  };
  componentDidMount = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        const { results } = await getInteressados();
        this.setState({ isFetching: false, results });
      } catch (error) {
        console.log("error", error);
        this.setState({ isFetching: false, hasFailed: true });
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { results } = this.state;
    console.log("resul", results);
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Lista de interesssados</h4>
              {/* <p className={classes.cardCategoryWhite}>
                Preencha as informções da carta contemplada
              </p> */}
            </CardHeader>
            <CardBody>
              {Object.values(results).length > 0 && (
                <ListOfInterested rows={Object.values(results)} />
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ListaDeInteressados);
