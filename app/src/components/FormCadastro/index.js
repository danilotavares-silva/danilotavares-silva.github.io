import React, { useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Button, TextField } from '@material-ui/core';

import PasswordInput from '../Passwordinput';
import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import useStyles from './styles';

function FormCadastro({ setRequestError, setIsLoading }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors }, watch } = useForm();
    const history = useHistory();

    async function entrar(data){
        
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

        console.log(dados);

        if (resposta.ok) {
            history.push('/');
            return;
        }

        setRequestError(dados);
    }
    const reqNome = watch('nome');
    const reqEmail = watch('email');
    const reqSenha = watch('senha');
    const [classe,setClasse]=useState(false);

    useEffect(()=>{
        setClasse(false);
        if(reqNome && reqEmail && reqSenha) setClasse(true);
    },[reqNome,reqEmail,reqSenha]);

    return (
        <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(entrar)}
        >
            <div className={classes.logo}>
                <LogoBlack />
            </div>
            <TextField className={classes.nome}
                label="Nome"
                error={!!errors.nome}
                {...register('nome', { required: true })}

            />
            <TextField className={classes.email}
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
            <Button type="submit" className={`${classe ? classes.botaoAtivo : classes.botao}`}>
                Criar conta
            </Button>
        </form>
    )
}

export default FormCadastro;