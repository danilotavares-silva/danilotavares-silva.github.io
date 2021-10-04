import React, { useState } from 'react';
import FormCliente from "../../components/FormCliente"
import { Backdrop, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useStyles from "./styles.js"

export default function Clientes() {

  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');
  const classes = useStyles();
   
  function handleOnAlertClose() {
    setRequestError('');
  }


  return (
    <div className={classes.root}>
      <h1 className={classes.tituloEditar}>// ADICIONAR CLIENTE</h1>
      <FormCliente setRequestError={setRequestError} setIsLoading={setIsLoading} />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={!!requestError} autoHideDuration={10000} onClose={handleOnAlertClose}>
        <Alert variant="filled" onClose={handleOnAlertClose} severity="error">
          {requestError}
        </Alert>
      </Snackbar>
    </div>
  );
}