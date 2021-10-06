import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom"

import { Card, Typography, Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import FormLogin from '../../components/FormLogin'
import useStyles from "./styles.js"

export default function KLLogin() {

    const classes = useStyles();
    
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');
    
    
    const token = localStorage.getItem('token')
    const history = useHistory();
    
    useEffect(()=>{
        if(token){
            history.push('/home');
        }
    },[])

    function handleOnAlertClose() {
        setRequestError('');
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <FormLogin setRequestError={setRequestError} setIsLoading={setIsLoading} />
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
                Não tem uma conta? <Link className={classes.link} to='/cadastro'>Cadastre-se</Link>
            </Typography>
        </div>
    )
}
