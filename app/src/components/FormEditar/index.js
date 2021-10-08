import { Button, Card, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Close } from "../../assets/close.svg";
import PasswordInput from '../Passwordinput';
import useStyles from './styles';

function FormEditar({ setRequestError, setIsLoading, onClose }) {

  const classes = useStyles();
  const { handleSubmit, register, formState: { errors }, setValue } = useForm();
  const token = localStorage.getItem('token')


  useEffect(() => {
    async function carregarUsuario() {
      const resposta = await fetch('https://api-desafio-5.herokuapp.com/perfil', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const usuarioRetornado = await resposta.json();
      console.log(usuarioRetornado);

      setValue('nome', usuarioRetornado.nome);
      setValue('email', usuarioRetornado.email);
      setValue('cpf', usuarioRetornado.cpf);
      setValue('telefone', usuarioRetornado.telefone);
    }
    carregarUsuario();
  }, [setValue, token]);

  async function editar(data) {



    const dadosAtualizados = Object.fromEntries(Object.entries(data).filter(([, value]) => value));

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

  return (
    <Card className={classes.card}>
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={handleSubmit(editar)}
      >
        <div className={classes.close} >
          <Close onClick={onClose} />
        </div>
        <h1 className={classes.tituloEditar}>EDITAR USUÁRIO</h1>
        <TextField className={classes.nome}
          label="Nome"
          error={!!errors.nome}
          {...register('nome')}
        />
        <TextField className={classes.email}
          variant='filled'
          label="E-mail"
          error={!!errors.email}
          {...register('email', { required: true })}
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
          {...register('telefone')}

        />
        <TextField className={classes.cpf}
          label="CPF"
          error={!!errors.cpf}
          {...register('cpf')}

        />
        <Button className={classes.botao} type="submit">
          Editar conta
        </Button>
      </form>
    </Card>

  )
}

export default FormEditar;