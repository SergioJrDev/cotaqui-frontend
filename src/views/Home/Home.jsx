import React from 'react';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import * as StyleDefault from 'assets/jss/material-kit-react';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Section from 'components/Section/Section';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
import { getAllCartas } from '../../services/cartas';
import TableWithResults from '../../components/TableWithResults/TableWithResults';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

const bgImage =
  'https://www.hospitalitymarketplace.co.za/wp-content/uploads/2018/05/business.jpg';

const MainSectionStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  height: '70vh',
  backgroundPosition: 'center'
};

class Home extends React.Component {
  state = {
    results: []
  };
  componentDidMount = () => {
    this.fetchCartas();
  };

  fetchCartas = async () => {
    try {
      const { response } = await getAllCartas();
      this.setState({
        results: Object.values(response)
      });
    } catch (error) {}
  };
  render() {
    const { results = [] } = this.state;
    const { classes } = this.props;
    const resultsFiltered = results.filter(result => !result.interessado);
    return (
      <PageWrapper>
        <div>
          <Section style={MainSectionStyle}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12}>
                  {/* <h1 className={classes.title}>Your Story Starts With Us.</h1> */}
                </GridItem>
              </GridContainer>
            </div>
          </Section>
          <Section>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <h2>Quem somos</h2>
                  <p>
                    Somos uma empresa que trabalha baseada em completa
                    transparência e agilidade buscando sempre a segurança e
                    credibilidade de nossos clientes. Manter a realização e a
                    confiabilidade de nossos clientes sem dúvida é o nosso maior
                    objetivo.
                  </p>
                  <p>
                    Nosso compromisso não é apenas entender as necessidades de
                    nossos clientes, mas sim solucionar suas necessidades
                    conduzindo com segurança a realização de seus objetivos com
                    consciência da importância de uma boa educação financeira.
                  </p>
                  <p>
                    A CotAqui cartas contempladas foi criada para estudar o
                    perfil de seu cliente analisando e desenvolvendo a melhor
                    oportunidade de negócio dentro do mercado de crédito
                    imobiliário com as melhores empresas e bancos, visando
                    viabilizar aos nossos clientes as melhores taxas e
                    condições.
                  </p>
                </GridItem>
              </GridContainer>
            </div>
          </Section>
          <Section>
            <div style={{ textAlign: 'center' }} className={classes.container}>
              <h2>Modalidades</h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title='Assessoria'
                    description='Prestamos assessoria do início ao fim do processo (agendamos
uma reunião para que possamos entender e avaliar o perfil de cada cliente e
assim concluir o seu projeto).'
                    icon={Chat}
                    iconColor='success'
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title='Cotas'
                    description='aquisição de uma cota de consórcio para quem tem visão
empreendedora e tem como objetivo primordial investimentos sólidos e seguro.'
                    icon={VerifiedUser}
                    iconColor='success'
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title='Cartas de crédito contemplada'
                    description='disponibilidade de uso imediato (pronta para
utilização seja para crédito imobiliário, automotivo, serviços ou até mesmo para
capital de giro com alienação imobiliária).'
                    icon={Fingerprint}
                    iconColor='success'
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
          </Section>
          {resultsFiltered.length > 0 && (
            <Section>
              <div className={classes.container}>
                <h2>Nossas cotas</h2>
                <GridContainer>
                  <GridItem xs={12}>
                    <TableWithResults />
                  </GridItem>
                </GridContainer>
              </div>
            </Section>
          )}
        </div>
      </PageWrapper>
    );
  }
}

export default withStyles(StyleDefault)(Home);
