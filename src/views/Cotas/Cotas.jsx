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

  render() {
    const { classes } = this.props;
    const { results } = this.state;
    const { status } = this.props.match.params;
    const compare = status === 'imoveis' ? 'IMOVEL' : 'CARRO';
    const resultsFiltered = results.filter(({ type }) => type === compare);
    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12}>
                  <h1 className={classes.title}>Cartas contempladas</h1>
                  <p>
                    Sessão de {status === 'imoveis' ? 'imóveis' : 'veículos'}{' '}
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
