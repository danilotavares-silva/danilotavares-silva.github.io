import { ReactComponent as Clientes } from "../../assets/clientes.svg";
import { ReactComponent as Cobrancas } from "../../assets/cobrancas.svg";
import { ReactComponent as HomeImg } from "../../assets/home.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import React from 'react'
import { useHistory } from 'react-router-dom';;

function Sidebar(){
    const history = useHistory();


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