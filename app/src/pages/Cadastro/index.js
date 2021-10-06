import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom"

import { Card, Typography, Backdrop, CircularProgress, Snackbar, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import useStyles from "./styles.js"
import { useForm } from 'react-hook-form';

import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import PasswordInput from '../../components/Passwordinput/index.js';
import TextInput from '../../components/TextInput/index.js';

export default function Login() {

    const classes = useStyles();
    
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');
    const [classe,setClasse]=useState(false);

    const { handleSubmit, register, formState: { errors }, watch } = useForm();
    const reqNome = watch('nome');
    const reqEmail = watch('email');
    const reqSenha = watch('senha');

    const history = useHistory();
    

    useEffect(()=>{
        setClasse(false);
        if(reqNome && reqEmail && reqSenha) setClasse(true);
    },[reqNome, reqEmail,reqSenha]);
    
    
    async function entrar(data) {

        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://api-desafio-5.herokuapp.com/usuarios',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        });

        setIsLoading(false);

        const dados = await resposta.json();
    
        if (resposta.ok) {
            history.push('/');
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
                    <TextInput className={classes.texto}
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('nome', { required: true })}
                    />
                    <TextInput className={classes.texto}
                        placeholder="exemplo@gmail.com"
                        label="E-mail"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                    <PasswordInput
                        label="Senha"
                        id="senha"
                        error={!!errors.senha}
                        register={() => register('senha', { required: true })}
                    />
                    <Button type="submit" className={`${classe ? classes.botaoAtivo : classes.botao}`} >
                        Criar conta
                    </Button>
                </form>
            </Card>
            
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar 
            open={!!requestError} 
            autoHideDuration={4000} 
            onClose={handleOnAlertClose}
            anchorOrigin={{ vertical: 'top', horizontal:'right' }}
            >
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

