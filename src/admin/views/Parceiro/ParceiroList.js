import React from 'react';
import GridItem from './../../components/Grid/GridItem.jsx';
import GridContainer from './../../components/Grid/GridContainer.jsx';
import Card from './../../components/Card/Card.jsx';
import withStyles from '@material-ui/core/styles/withStyles';
import CardHeader from './../../components/Card/CardHeader.jsx';
import CardBody from '../../components/Card/CardBody';
import TableList from '../../components/TableList/TableList';

import { getParceiro, deleteParceiro } from '../../../services/parceiro';
import ParceiroTable from '../../components/ParceiroTable/ParceiroTable';

const styles = theme => ({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
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

class ParceiroList extends React.Component {
  state = {
    ...stateDefault
  };
  componentDidMount = () => this.fetchAllCartas();

  fetchAllCartas = () => {
    this.setState({ isFetching: true }, async () => {
      try {
        const response = await getParceiro();
        this.setState({ isFetching: false, results: response });
      } catch (error) {
        this.setState({ isFetching: false, hasFailed: true });
      }
    });
  };

  deleteParceiro = async _id => {
    console.log({ _id });
    try {
      const response = await deleteParceiro({ _id });
      console.log('response', response);
      this.fetchAllCartas();
    } catch (error) {}
  };

  render() {
    const { classes } = this.props;
    const { results } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>Lista de parceiros</h4>
              <p className={classes.cardCategoryWhite}>
                Listagem de parceiros interessados.
              </p>
            </CardHeader>
            <CardBody>
              {Object.values(results).length > 0 ? (
                <ParceiroTable
                  onDeleteHandler={this.deleteParceiro}
                  rows={Object.values(results)}
                />
              ) : (
                <p className='a-center'>Nenhum parceiro ainda.</p>
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ParceiroList);
