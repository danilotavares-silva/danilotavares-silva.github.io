import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import { Button } from '@material-ui/core';

import useStyles from './styles';
import TextInputCliente from '../TextInputCliente';

function FormCliente({ setRequestError, setIsLoading }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const history = useHistory();
    const token = localStorage.getItem('token')


    function onClose(){
        history.push('/home');
    };

    async function entrar(data){
        
        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://api-desafio-5.herokuapp.com/clientes',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        setIsLoading(false);

        const dados = await resposta.json();

        console.log(dados);

        if (resposta.ok) {
            history.push('/home');
            return;
        }

        setRequestError(dados);
    }

    return (
        <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(entrar)}
        >
            <div className={classes.container}>

                <TextInputCliente className={classes.nome}
                        placeholder="Nome do cliente"
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                     />
                <TextInputCliente className={classes.email}
                        placeholder="email@email.com"
                        label="Email"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                <div className={classes.linha}>
                    <TextInputCliente className={classes.nome}
                        placeholder="Nome do cliente"
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                    <TextInputCliente className={classes.email}
                        placeholder="email@email.com"
                        label="Email"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                </div>
                <div className={classes.linha}>
                    <TextInputCliente className={classes.nome}
                        placeholder="Nome do cliente"
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                    <TextInputCliente className={classes.email}
                        placeholder="email@email.com"
                        label="Email"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                </div>
                <div className={classes.linha}>
                    <TextInputCliente className={classes.nome}
                        placeholder="Nome do cliente"
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                    <TextInputCliente className={classes.email}
                        placeholder="email@email.com"
                        label="Email"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                </div>
                <div className={classes.linha}>
                    <TextInputCliente className={classes.nome}
                        placeholder="Nome do cliente"
                        label="Nome"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                    <TextInputCliente className={classes.email}
                        placeholder="email@email.com"
                        label="Email"
                        error={!!errors.email}
                        register={() => register('email', { required: true })}
                    />
                </div>
                
               
            </div>
            <div>
                <Button className={classes.botao} onClick={onClose}>
                    Cancelar
                </Button>
                <Button className={classes.botao} type="submit">
                    Adicionar Cliente
                </Button>
            </div>

        </form>
    )
}

export default FormCliente;