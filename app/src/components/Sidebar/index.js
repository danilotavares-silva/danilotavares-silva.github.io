import { ReactComponent as Clientes } from "../../assets/clientes.svg";
import { ReactComponent as Cobrancas } from "../../assets/cobrancas.svg";
import { ReactComponent as HomeImg } from "../../assets/home.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { AuthContext } from '../../routes';

function Sidebar(){
    const location = useLocation();
    const history = useHistory();
    // const classes = useStyles();
    const { deslogar } = useContext(AuthContext);
    
    function handleLogout(){
        deslogar();
        history.push('/');
    }

    return (
        <div>
            <Logo/>
            <div onClick={() => history.replace('/home')}>
                <HomeImg/>
            </div>
            <div onClick={() => history.replace('/home')}>
                <Cobrancas/>
            </div>
            <div onClick={() => history.replace('/home')}>
                <Clientes/>
            </div>
        </div>
    )
}

export default Sidebar;