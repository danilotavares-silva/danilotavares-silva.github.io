import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom"

import { Card, Typography, Backdrop, CircularProgress, Snackbar, TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import useStyles from "./styles.js"
import { useForm } from 'react-hook-form';

import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import PasswordInput from '../../components/Passwordinput/index.js';

export default function Login() {

    const classes = useStyles();
    
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');
    const [classe,setClasse]=useState(false);

    const { handleSubmit, register, formState: { errors }, watch } = useForm();
    const reqEmail = watch('email');
    const reqSenha = watch('senha');

    const token = localStorage.getItem('token')
    const history = useHistory();
    
    useEffect(()=>{
        if(token){
            history.push('/home');
        }
    },[])

    useEffect(()=>{
        setClasse(false);
        if(reqEmail && reqSenha) setClasse(true);
    },[reqEmail,reqSenha]);
    
    

    async function entrar(data) {

        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://api-desafio-5.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setIsLoading(false);

        const dados = await resposta.json();

        if (resposta.ok) {
            localStorage.setItem(`token`,dados.token);
            history.push('/home');
            return;
        }

        setRequestError(dados);
    }

    function handleOnAlertClose() {
        setRequestError('');
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <form className={classes.form} onSubmit={handleSubmit(entrar)}>
                    <div className={classes.logo}>
                        <LogoBlack />
                    </div>
                    <TextField className={classes.email}
                        placeholder="Placeholder"
                        label="E-mail"
                        error={!!errors.email}
                        {...register('email', { required: true })}
                    />
                    <PasswordInput
                        label="Senha"
                        id="senha"
                        error={!!errors.senha}
                        register={() => register('senha', { required: true })}
                    />
                    <Button type="submit" className={`${classe ? classes.botaoAtivo : classes.botao}`} >
                        Entrar
                    </Button>
                </form>
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
