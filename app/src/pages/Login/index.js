import React, { useContext, useState } from 'react'
import {
    Card,
    TextField,
    Button,
    Typography,
    Backdrop, 
    CircularProgress, 
    Snackbar
} from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import useStyles from "./styles.js"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { AuthContext } from '../../routes.js'
import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";
import PasswordInput from '../../components/Passwordinput'


export default function Login() {

    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logar } = useContext (AuthContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState('');

    function handleOnAlertClose() {
        setRequestError('');
    }


    async function entrar(data){

        setRequestError('');
        setIsLoading(true);

        const resposta = await fetch('https://desafio-m03.herokuapp.com/login',{
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
            logar(dados.token);
            history.push('/home');
            return;
        }
      
        setRequestError(dados);
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit(entrar)}
                >
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
                        register={()=> register('senha', { required: true })}
                    />
                    <Button type="submit" className={classes.botao} >
                        Entrar
                    </Button>
                </form>
            </Card>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={!!requestError} autoHideDuration={10000} onClose={handleOnAlertClose}>
                <Alert onClose={handleOnAlertClose} severity="error">
                    {requestError}
                </Alert>
            </Snackbar>
            <Typography variant="body2">
                Primeira vez aqui? <Link className={classes.link} to='/cadastro'>Crie uma conta</Link>
            </Typography>
        </div>
    )
}
