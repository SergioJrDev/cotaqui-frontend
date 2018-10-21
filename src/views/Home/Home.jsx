import React from "react";
import PageWrapper from "components/PageWrapper/PageWrapper";
import * as StyleDefault from "assets/jss/material-kit-react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Section from "components/Section/Section";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Table from "components/Table/Table";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import { getAllCartas } from "../../services/cartas";
import TableWithResults from "../../components/TableWithResults/TableWithResults";

const bgImage =
  "https://www.hospitalitymarketplace.co.za/wp-content/uploads/2018/05/business.jpg";

const MainSectionStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  height: "70vh",
  backgroundPosition: "center"
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
                  <h2>What's the title</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi sollicitudin metus in risus vulputate ultricies.
                    Integer pellentesque facilisis mauris a dignissim. Nunc id
                    rhoncus nisl, ut porta nisi. Morbi pharetra scelerisque
                    tortor, a scelerisque tellus porttitor vel. Aliquam ipsum
                    enim, tempus nec erat sit amet, eleifend dapibus eros.
                  </p>
                  <p>
                    Mauris venenatis aliquam vestibulum. Etiam tempus commodo
                    tincidunt. Sed sit amet metus ullamcorper, convallis purus
                    non, dictum odio. Fusce posuere ut justo quis faucibus. Cras
                    elementum erat felis, et pharetra augue consectetur eu.
                    Donec egestas leo felis. Aliquam sagittis, eros a tempor
                    luctus, eros nisi lobortis sem, pulvinar egestas nisl dolor
                    id ex.
                  </p>
                </GridItem>
              </GridContainer>
            </div>
          </Section>
          <Section>
            <div style={{ textAlign: "center" }} className={classes.container}>
              <h2>Features</h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Free Chat"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={Chat}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Verified Users"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={VerifiedUser}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Fingerprint"
                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                    icon={Fingerprint}
                    iconColor="success"
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
