import React from "react";

import {
    Typography,
} from '@material-ui/core'

import Sidebar from '../Sidebar';

export default function Main({children}) {
    return (
        <div >
            <Sidebar/>
            <div>
                <Typography variant='h2'>Nome da loja</Typography>
                {children}
            </div>
        </div>
    )
}
