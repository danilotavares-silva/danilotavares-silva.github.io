import React from "react";

import useStyles from "./styles.js";
import Sidebar from '../Sidebar';
import Menu from "../../components/Menu";

export default function Main({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar className={classes.sideBar}/>
            <div className={classes.container}>
                <div className={classes.header}>
                    <Menu className={classes.iconPerfil} />
                </div>
                {children}
            </div>
        </div>
    )
}
