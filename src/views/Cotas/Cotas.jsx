import React from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import * as StyleDefault from 'assets/jss/material-kit-react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Section from 'components/Section/Section';
import Table from 'components/Table/Table';
import { getAllCartas } from '../../services/cartas';

class AllCotas extends React.Component {
  state = {
    results: []
  };
  componentDidMount = async () => {
    try {
      const { response } = await getAllCartas();
      this.setState({
        results: Object.values(response)
      });
    } catch (error) {}
  };

  filterResults = () => {
const { results } = this.state;
    const { status } = this.props.match.params;
    const resultsMap = {
      imoveis: results.filter(({ type, nova }) => type === 'IMOVEL' && !nova),
      veiculos: results.filter(({ type, nova }) => type === 'CARRO' && !nova),
      novas: results.filter(({ nova }) => nova),
    }
    return resultsMap[status] || results
  }

  render() {
    const { classes } = this.props;
    const { status } = this.props.match.params;
   
    const resultsFiltered = this.filterResults()
    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12}>
                  <h1 className={classes.title}>Cartas {status === 'novas' ? 'Novas' : 'Contempladas'}</h1>
                  <p>
                    Sessão de {status}
                  </p>
                  {resultsFiltered.length > 0 ? (
                    <Table rows={resultsFiltered} />
                  ) : (
                    <p className='a-center'>Nenhuma carta cadastrada ainda.</p>
                  )}
                </GridItem>
              </GridContainer>
            </div>
          </Section>
        </div>
      </PageWrapper>
    );
  }
}

export default withStyles(StyleDefault)(AllCotas);
