import React, { createContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Cadastro from './pages/Cadastro'
import Login from './pages/Login'


export const AuthContext = createContext();



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
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/" component={Login}/>
                </Switch>
            </Router> 
        </AuthContext.Provider>
    );
}

export default Routes;