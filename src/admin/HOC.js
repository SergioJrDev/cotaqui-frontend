import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CONFIG from "./../APP_CONFIG";
import { LocalStorage } from "../services/index";
import { ValidateToken } from "../services/user";
import Dashboard from "./layouts/Dashboard/Dashboard";

class HOC extends Component {
  state = {
    checked: false,
    isValid: false,
    isAdmin: false
  };

  componentWillMount = async () => {
    this.validadeToken();
  };

  validadeToken = async () => {
    try {
      const { restrict } = this.props;
      const credentials = await LocalStorage.getKey();
      if (!credentials) {
        return this.redirectUser();
      }
      const { token, email } = credentials;
      const isAdmin = CONFIG.ADMINS.includes(email);

      const { isValid } = await ValidateToken({ token });
      if (!isValid) {
        return this.redirectUser();
      }

      if (!isAdmin && restrict) {
        return this.redirectUser("/lista-de-cartas");
      }

      this.setState({
        isValid: true,
        checked: true,
        isAdmin: CONFIG.ADMINS.includes(email)
      });
    } catch (error) {
      return this.redirectUser();
    }
  };

  redirectUser = (path = "/login") => {
    return this.props.history.push(path);
  };

  render() {
    const { isValid, checked } = this.state;
    if (!checked || (checked && !isValid)) {
      return null;
    }

    if (checked && isValid) return <Dashboard {...this.props} />;
  }
}

export default withRouter(HOC);
