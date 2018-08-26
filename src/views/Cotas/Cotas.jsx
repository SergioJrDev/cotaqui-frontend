import React from "react";
import PageWrapper from "components/PageWrapper/PageWrapper";
import * as StyleDefault from "assets/jss/material-kit-react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Section from "components/Section/Section";
import Table from "components/Table/Table";

class AllCotas extends React.Component {
  componentDidMount = () => {
    console.log("fetch");
  };

  render() {
    const { classes } = this.props;
    return (
      <PageWrapper>
        <div>
          <Section>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12}>
                  <h1 className={classes.title}>Cartas contempladas</h1>
                  <p>Sessão de veículos</p>
                  <Table />
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
