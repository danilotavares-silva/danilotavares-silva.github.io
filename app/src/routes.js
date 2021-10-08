import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Main from './components/Main';
import Home from './pages/Home';
import Cobrancas from './pages/Cobrancas';
import Clientes from './pages/Clientes';

import { AuthContext } from './contexts/AuthContext';
import { GlobalContext } from './contexts/GlobalContext';

function Routes() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  function RotasProtegidas(props) {
    const token = localStorage.getItem('token')

    return (
      <Route render={() => (token ? props.children : <Redirect to="/" />)} />
    )
  }

  const providerValues = {
    openMenu,
    setOpenMenu,
    openEditModal,
    setOpenEditModal
  };

  return (
    <AuthContext.Provider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />

          <RotasProtegidas>
            <GlobalContext.Provider value={providerValues}>
              <Main>
                <Route path="/home" exact component={Home} />
                <Route path="/cobrancas" exact component={Cobrancas} />
                <Route path="/clientes" exact component={Clientes} />
              </Main>
            </GlobalContext.Provider>
          </RotasProtegidas>

        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default Routes;