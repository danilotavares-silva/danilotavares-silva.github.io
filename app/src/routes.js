import React, { createContext, useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Main from './components/Main';

export const AuthContext = createContext();

function RotasProtegidas(props){
    const { token } = useContext(AuthContext);

    return (
        <Route render={() => (true ? props.children : <Redirect to="/" />)} />
    )
}

function Routes() {

    const [token, setToken] = useState("");

    function logar(novoToken){
        setToken(novoToken);

        console.log('loguei')
    }

    function deslogar(){
        setToken('');
    }

    return (
        <AuthContext.Provider value={{token, logar, deslogar}}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <RotasProtegidas>
                        <Main>
                            <Route path= "/home" exact component={Home}/>
                        </Main>
                    </RotasProtegidas>
                </Switch>
            </Router> 
        </AuthContext.Provider>
    );
}

export default Routes;