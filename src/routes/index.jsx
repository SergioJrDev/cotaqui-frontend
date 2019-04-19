import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from 'views/Home/Home';
import Cartas from 'views/Cotas/Cotas';
import SingleCotas from 'views/SingleCota/SingleCota';

import CriarCarta from './../admin/views/Cartas/CriarCarta';
import EditCards from './../admin/views/Cartas/EditCartas';
import ListaDeCartas from './../admin/views/Cartas/ListaDeCartas';
import ListaDeInteressados from './../admin/views/Cartas/Interessados';
import CriarUsuario from './../admin/views/Users/CriarUsuario';
import Login from '../admin/views/Users/Login';
import HOC from '../admin/HOC';
import Parceiro from '../views/Parceiro/Parceiro';
import ParceiroList from '../admin/views/Parceiro/ParceiroList';
import VenderCota from '../views/VenderCota/VenderCota';
import VendaList from '../admin/views/VendaList/VendaList';
import VendaSingle from '../admin/views/VendaSingle/VendaSingle';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/vender-cota' component={VenderCota} />
      <Route exact path='/seja-parceiro' component={Parceiro} />
      <Route exact path='/carta/:id' component={SingleCotas} />
      <Route exact path='/cartas-contempladas/:status' component={Cartas} />
      <Route exact path='/cartas-contempladas/:status' component={Cartas} />
      <Route
        exact
        path='/criar-carta'
        component={props => <HOC component={CriarCarta} {...props} />}
      />
      <Route
        exact
        path='/lista-de-cartas/:_id'
        component={props => <HOC component={EditCards} {...props} />}
      />
      <Route
        exact
        path='/lista-de-cartas'
        component={props => <HOC component={ListaDeCartas} {...props} />}
      />
      <Route
        exact
        path='/lista-de-interessados'
        component={props => <HOC component={ListaDeInteressados} {...props} />}
      />
      <Route
        exact
        path='/criar-usuario'
        component={props => <HOC component={CriarUsuario} {...props} />}
      />

      <Route
        exact
        path='/parceiros'
        component={props => <HOC component={ParceiroList} {...props} />}
      />

      <Route
        exact
        path='/lista-de-vendas'
        component={props => <HOC component={VendaList} {...props} />}
      />

      <Route exact path='/login' component={Login} />
      <Route
        exact
        path='/venda/:_id'
        component={props => <HOC component={VendaSingle} {...props} />}
      />
      <Redirect to='/' />
    </Switch>
  </HashRouter>
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
