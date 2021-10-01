import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Button, TextField } from '@material-ui/core';

import PasswordInput from '../Passwordinput';
import { AuthContext } from '../../contexts/AuthContext';
import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import useStyles from '../../pages/Login/styles';

function FormLogin({ setRequestError, setIsLoading }) {

    const classes = useStyles();
    const { logar } = useContext(AuthContext);
    const { handleSubmit, register, formState: { errors } } = useForm();
    const history = useHistory();

    async function entrar(data) {

        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://desafio-m03.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setIsLoading(false);

        const dados = await resposta.json();

        console.log(dados);

        if (resposta.ok) {
            logar(dados.token);
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
                label="E-mail"
                error={!!errors.email}
                {...register('email', { required: true })}
            />
            <PasswordInput
                label="Senha"
                id="senha"
                error={!!errors.email}
                register={() => register('senha', { required: true })}
            />
            <Button type="submit" className={classes.botao} >
                Entrar
            </Button>
        </form>
    )
}

export default FormLogin;