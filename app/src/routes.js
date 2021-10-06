import React from 'react'
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

function Routes() {

    function RotasProtegidas(props){
        const token = localStorage.getItem('token')

        return (
            <Route render={() => (token ? props.children : <Redirect to="/" />)} />
        )
    }

    return (
        <AuthContext.Provider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    {/* <Route path="/cadastro" component={Cadastro}/>
                    <RotasProtegidas>
                        <Main>
                            <Route path= "/home" exact component={Home}/>
                            <Route path= "/cobrancas" exact component={Cobrancas}/>
                            <Route path= "/clientes" exact component={Clientes}/>
                        </Main>
                    </RotasProtegidas> */}
                    
                </Switch>
            </Router> 
        </AuthContext.Provider>
    );
}

export default Routes;