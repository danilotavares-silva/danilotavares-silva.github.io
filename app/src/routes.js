import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

export default function routes() {
    return (
        <Router>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/" component={Login}/>
            </Switch>
        </Router>
    )
}
