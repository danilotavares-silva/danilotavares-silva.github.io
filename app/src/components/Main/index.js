import React from "react";
import useStyles from "./styles.js";
import Sidebar from '../Sidebar';
import { Card, Typography } from '@material-ui/core';

import { ReactComponent as Editar } from "../../assets/editar.svg";
import { ReactComponent as Deslogar } from "../../assets/deslogar.svg";
import { ReactComponent as IconPerfil } from "../../assets/iconPerfil.svg";
import FormEditar from "../FormEditar";

export default function Main({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.headerContainer}>
                        <IconPerfil className={classes.iconPerfil} />
                        <Card>
                            <div className={classes.menu}>
                                <div className={classes.linkMenu}>
                                    <Editar /><Typography className={classes.editar}>Editar</Typography>
                                </div>
                                <div className={classes.linkMenu}>
                                    <Deslogar /><Typography className={classes.deslogar}>Deslogar</Typography>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div>
                    {children}
                    <div className={classes.rootCard}>
                        <Card className={classes.card}>
                            <FormEditar/>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
