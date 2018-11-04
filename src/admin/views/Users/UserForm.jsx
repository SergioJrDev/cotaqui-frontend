import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import CardBody from "../../components/Card/CardBody";
import TextField from "@material-ui/core/TextField";

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

class UserForm extends React.Component {
  render() {
    return (
      <div>
        <CardBody>
          <GridContainer>
            {!this.props.hideName && (
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  label="Nome"
                  id="name"
                  fullWidth
                  value={this.props.name}
                  className="input-space"
                  onChange={this.props.handleChange}
                />
              </GridItem>
            )}
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="E-mail"
                id="email"
                type="email"
                fullWidth
                value={this.props.email}
                className="input-space"
                onChange={this.props.handleChange}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                label="Senha"
                id="password"
                type="password"
                fullWidth
                value={this.props.password}
                className="input-space"
                onChange={this.props.handleChange}
              />
            </GridItem>
          </GridContainer>
        </CardBody>
      </div>
    );
  }
}

export default withStyles(styles)(UserForm);
