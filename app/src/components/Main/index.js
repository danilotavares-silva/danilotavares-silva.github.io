import React from "react";
import useStyles from "./styles.js";
import {
    Typography,
} from '@material-ui/core'

import Sidebar from '../Sidebar';

export default function Main({children}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
    )
}
