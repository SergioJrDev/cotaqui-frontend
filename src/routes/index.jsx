import React from "react";
import { createBrowserHistory } from "history";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "views/Home/Home";
import Cartas from "views/Cotas/Cotas";
import SingleCotas from "views/SingleCota/SingleCota";

import CriarCarta from "./../admin/views/Cartas/CriarCarta";
import EditCards from "./../admin/views/Cartas/EditCartas";
import ListaDeCartas from "./../admin/views/Cartas/ListaDeCartas";
import ListaDeInteressados from "./../admin/views/Cartas/Interessados";
import CriarUsuario from "./../admin/views/Users/CriarUsuario";
import Login from "../admin/views/Users/Login";
import HOC from "../admin/HOC";

var hist = createBrowserHistory();

const Routes = () => (
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cartas-contempladas/:id" component={SingleCotas} />
      <Route exact path="/cartas-contempladas" component={Cartas} />
      <Route
        exact
        path="/criar-carta"
        component={() => <HOC component={CriarCarta} />}
      />
      <Route
        exact
        path="/lista-de-cartas/:_id"
        component={() => <HOC component={EditCards} />}
      />
      <Route
        exact
        path="/lista-de-cartas"
        component={() => <HOC component={ListaDeCartas} />}
      />
      <Route
        exact
        path="/lista-de-interessados"
        component={() => <HOC component={ListaDeInteressados} />}
      />
      <Route
        exact
        path="/criar-usuario"
        component={() => <HOC component={CriarUsuario} />}
      />

      <Route exact path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;

// TO DO
// Autenticação
// Tooltip ao realizar ações
// Formatar valores do front
// Login
// Criação de usuário
// Exclusão de usuário
// Envio de e - mail
