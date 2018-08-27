import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "assets/scss/material-kit-react.css?v=1.2.0";

import Home from "views/Home/Home";
import Cartas from "views/Cotas/Cotas";
import SingleCotas from "views/SingleCota/SingleCota";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cartas-contempladas/:id" component={SingleCotas} />
      <Route exact path="/cartas-contempladas" component={Cartas} />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
