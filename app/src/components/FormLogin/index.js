import React, { useContext, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Button, TextField } from '@material-ui/core';

import PasswordInput from '../Passwordinput';
import { AuthContext } from '../../contexts/AuthContext';
import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import useStyles from './styles';

function FormLogin({ setRequestError, setIsLoading }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors }, watch } = useForm();
    const history = useHistory();

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

    

    return (
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
    )
}

export default FormLogin;