import React, { useContext } from 'react'
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography
} from '@material-ui/core'
import useStyles from "./styles.js"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { AuthContext } from '../../routes.js'

export default function Login() {

    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const { logar } = useContext (AuthContext);

    async function onSubmit(data){
        const resposta = await fetch('https://desafio-m03.herokuapp.com/login',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        });

        const {token} = await resposta.json();

        logar(token);

    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography variant="h4">Login</Typography>
                        <TextField className={classes.email} 
                            label="E-mail" 
                            {...register('email', {required:true})}

                            />
                        <TextField className={classes.senha} 
                            label="Senha" 
                            type="password" 
                            {...register('senha', {required:true})}

                        />
                        <Button className={classes.botao} type="submit">
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Typography variant="body2">
                Primeira vez aqui? <Link className={classes.link} to='/cadastro'>Crie uma conta</Link>
            </Typography>
        </div>
    )
}
