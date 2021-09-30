import React from 'react'
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography
} from '@material-ui/core'

import useStyles from "./styles.js"
import { Link } from "react-router-dom"

export default function Login() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h4">Login</Typography>
                        <TextField className={classes.email} label="E-mail"/>
                        <TextField className={classes.senha} label="Senha" type="password"/>
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
