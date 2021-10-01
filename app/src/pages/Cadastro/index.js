import React, { useState } from 'react';
import { Link } from "react-router-dom"

import { Card, Typography, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import FormCadastro from '../../components/FormCadastro'
import useStyles from "./styles.js"

export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');
    
    const classes = useStyles();

    function handleOnAlertClose() {
        setRequestError('');
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <FormCadastro setRequestError={setRequestError} setIsLoading={setIsLoading} />
            </Card>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={!!requestError} autoHideDuration={10000} onClose={handleOnAlertClose}>
                <Alert variant="filled" onClose={handleOnAlertClose} severity="error">
                    {requestError}
                </Alert>
            </Snackbar>
            <Typography variant="body2">
                Já possui uma conta? <Link className={classes.link} to='/'>Acesse agora!</Link>
            </Typography>
        </div>
    )
}
