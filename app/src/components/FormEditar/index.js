import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form';

import { Card,Button, TextField } from '@material-ui/core';

import { ReactComponent as Close } from "../../assets/close.svg";
import { AuthContext } from '../../contexts/AuthContext';
import PasswordInput from '../Passwordinput';
import useStyles from './styles';

function FormEditar({ setRequestError, setIsLoading, onClose }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { token } = useContext(AuthContext);
    const [ usuario, setUsuario ] = useState({
        nome:'',email:'',telefone:'',cpf:''
    });
    
    useEffect(()=>{
        async function carregarUsuario(token) {
            const resposta = await fetch('https://api-desafio-5.herokuapp.com/perfil', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const usuarioRetornado = await resposta.json();

            setUsuario(usuarioRetornado);
        }

        carregarUsuario();
    },[]);

    async function editar(data) {

        setRequestError('');
        setIsLoading(true);

        const dadosAtualizados = Object.fromEntries(Object.entries(data).filter(([,value])=>value));

        await fetch('https://api-desafio-5.herokuapp.com/perfil', {
            method: 'PUT',
            body: JSON.stringify(dadosAtualizados),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    
        onClose();
        
    }

    const handleChange = (event) => {
        setUsuario(event.target.value);
    };

    return (

        <Card className={classes.card}>
            <form
                className={classes.form}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(editar)}
            >
                <div className={classes.close} >
                    <Close onClick={onClose}/>
                </div>
                <h1 className={classes.tituloEditar}>//EDITAR USUÁRIO</h1>
                <TextField className={classes.nome}
                    label="Nome"
                    error={!!errors.nome}
                    value={usuario.nome}
                    onChange={handleChange}
                    {...register('nome')}

                />
                <TextField className={classes.email}
                    label="E-mail"
                    error={!!errors.email}
                    value={usuario.email}
                    {...register('email')}

                />
                <PasswordInput
                    label="Nova senha"
                    id="senha"
                    error={!!errors.senha}
                    register={() => register('senha')}
                />
                <TextField className={classes.telefone}
                    label="Telefone"
                    error={!!errors.telefone}
                    value={usuario.telefone}
                    {...register('telefone')}

                />
                <TextField className={classes.cpf}
                    label="CPF"
                    error={!!errors.cpf}
                    value={usuario.cpf}
                    {...register('email')}

                />
                <Button className={classes.botao} type="submit">
                    Editar conta
                </Button>
            </form>
        </Card>

    )
}

export default FormEditar;