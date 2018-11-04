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
// import Dashboard from "./admin/routes";

import Admin from "./admin/layouts/Dashboard/Dashboard";

import CriarCarta from "./admin/views/Cartas/CriarCarta";
import EditCards from "./admin/views/Cartas/EditCartas";
import Dashboard from "./admin/layouts/Dashboard/Dashboard";
import ListaDeCartas from "./admin/views/Cartas/ListaDeCartas";
import ListaDeInteressados from "./admin/views/Cartas/Interessados";
import CriarUsuario from "./admin/views/Users/CriarUsuario";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cartas-contempladas/:id" component={SingleCotas} />
      <Route exact path="/cartas-contempladas" component={Cartas} />
      <Route exact path="/dashboard" component={Admin} />
      <Route
        exact
        path="/criar-carta"
        component={() => <Dashboard component={CriarCarta} />}
      />
      <Route
        exact
        path="/lista-de-cartas/:_id"
        component={() => <Dashboard component={EditCards} />}
      />
      <Route
        exact
        path="/lista-de-cartas"
        component={() => <Dashboard component={ListaDeCartas} />}
      />
      <Route
        exact
        path="/lista-de-interessados"
        component={() => <Dashboard component={ListaDeInteressados} />}
      />
      {/* <Route exact path="/table" component={Admin} /> */}
      {/* <Route exact path="/notifications" component={Admin} /> */}
      <Route
        exact
        path="/criar-usuario"
        component={() => <Dashboard component={CriarUsuario} />}
      />
      <Redirect to="/" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// TO DO
// Autenticação
// Tooltip ao realizar ações
// Formatar valores do front
// Login
// Criação de usuário
// Exclusão de usuário
// Envio de e - mail
