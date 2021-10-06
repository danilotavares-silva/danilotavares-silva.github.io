import React from "react";

import useStyles from "./styles.js";
import Sidebar from '../Sidebar';
import MenuListComposition from "../../components/MenuListComposition";

export default function Main({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar className={classes.sideBar}/>
            <div className={classes.container}>
                <div className={classes.header}>
                    <MenuListComposition className={classes.iconPerfil} />
                </div>
                {children}
            </div>
        </div>
    )
}
