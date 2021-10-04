import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

import { Button } from '@material-ui/core';

import useStyles from './styles';

function FormCliente({ setRequestError, setIsLoading }) {

    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const history = useHistory();
    const { token } = useContext(AuthContext);


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
            <div className={classes.grid}>
                <label className={classes.nome}>Nome:
                    <input
                        error={!!errors.nome}
                        {...register('nome', { required: true })}
                    />
                </label>
                <label className={classes.email}>
                    E-mail:
                    <input
                        error={!!errors.email}
                        {...register('email', { required: true })}
                    />
                </label>
                <label className={classes.cpf}>
                    CPF:
                    <input
                        error={!!errors.cpf}
                        {...register('cpf', { required: true })}
                    />
                </label>
                <label className={classes.telefone}>
                    Telefone:
                    <input
                        error={!!errors.telefone}
                        {...register('telefone', { required: true })}
                    />
                </label>
                <label className={classes.cep}>
                    CEP:
                    <input
                        error={!!errors.cep}
                        {...register('cep', { required: true })}
                    />
                </label>
                <label className={classes.logradouro}>
                    Logradouro
                    <input
                        error={!!errors.logradouro}
                        {...register('logradouro', { required: true })}
                    />
                </label>
                <label className={classes.bairro}>
                    Bairro
                    <input
                        error={!!errors.bairro}
                        {...register('bairro', { required: true })}
                    />
                </label>
                <label className={classes.cidade}>
                    Cidade
                    <input
                        error={!!errors.cidade}
                        {...register('cidade', { required: true })}
                    />
                </label>
                <label className={classes.complemento}>
                    Complemento
                    <input
                        error={!!errors.complemento}
                        {...register('complemento', { required: true })}
                    />
                </label>
                <label className={classes.pontoReferencia}>
                    Ponto de Referência
                    <input
                        error={!!errors.ponto_de_referencia}
                        {...register('ponto_de_referencia')}
                    />
                </label>
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