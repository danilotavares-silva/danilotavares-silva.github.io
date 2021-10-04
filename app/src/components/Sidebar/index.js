import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core";

import { ReactComponent as Clientes } from "../../assets/clientes.svg";
import { ReactComponent as Cobrancas } from "../../assets/cobrancas.svg";
import { ReactComponent as HomeImg } from "../../assets/home.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useStyles from "./styles.js";

function Sidebar(){
    const history = useHistory();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Logo className={classes.logo}/>
            <div className={classes.linkSidebar} onClick={() =>history.replace('/home')}>
                <HomeImg/><h1 className={classes.letraSidebar}>HOME</h1>
            </div>
            <div className={classes.linkSidebar} onClick={() => history.replace('/home')}>
                <Cobrancas/><h1 className={classes.letraSidebar}>COBRANÇAS</h1>
            </div>
            <div className={classes.linkSidebar} onClick={() => history.replace('/clientes')}>
                <Clientes/><h1 className={classes.letraSidebar}>CLIENTES</h1>
            </div>
            <Button className={classes.botao}>
                            Criar cobrança
            </Button>
        </div>
    )
}

export default Sidebar;