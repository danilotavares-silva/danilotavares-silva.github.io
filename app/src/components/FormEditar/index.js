import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Card,Button, TextField } from '@material-ui/core';

import { ReactComponent as Close } from "../../assets/close.svg";
import PasswordInput from '../Passwordinput';
import useStyles from './styles';

function FormEditar({ setRequestError, setIsLoading, onClose }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const history = useHistory();

    async function entrar(data) {

        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://desafio-m03.herokuapp.com/usuarios', {
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
            history.push('/');
            return;
        }

        setRequestError(dados);
    }

    return (

        <Card className={classes.card}>
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(entrar)}
            >
                <div className={classes.close} >
                    <Close onClick={onClose}/>
                </div>
                <h1 className={classes.tituloEditar}>EDITAR USUÁRIO</h1>
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
                    label="Nova senha"
                    id="senha"
                    error={!!errors.senha}
                    register={() => register('senha', { required: true })}
                />
                <TextField className={classes.telefone}
                    label="Telefone"
                    error={!!errors.telefone}
                    {...register('telefone', { required: true })}

                />
                <TextField className={classes.cpf}
                    label="CPF"
                    error={!!errors.cpf}
                    {...register('email', { required: true })}

                />
                <Button className={classes.botao} type="submit">
                    Editar conta
                </Button>
            </form>
        </Card>

    )
}

export default FormEditar;