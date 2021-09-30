import React from 'react'
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography
} from '@material-ui/core'
import useStyles from "./styles.js"
import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ReactComponent as LogoBlack } from "../../assets/logoblack.svg";

export default function Cadastro() {

    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    async function onSubmit(data){
        // const resposta = await fetch('https://desafio-m03.herokuapp.com/usuarios',{
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-type':'application/json'
        //     }
        // });

        history.push('/');
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
                        <div className={classes.logo}>
                            <LogoBlack/>
                        </div>
                        <TextField className={classes.email} 
                            label="Nome" 
                            {...register('nome', {required:true})}

                        />
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
                            Criar conta
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Typography variant="body2">
                Já possui uma conta? <Link className={classes.link} to='/'>Acesse agora</Link>
            </Typography>
        </div>
    )
}
