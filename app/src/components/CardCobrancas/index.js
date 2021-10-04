import React from "react";
import useStyles from "./styles.js";
import { Typography  } from '@material-ui/core';
import { ReactComponent as Cobrancas } from "../../assets/cobrancas.svg";

export default function CardCobrancas() {
  const classes = useStyles(); 
  
  return (
      <div className={classes.root}>
          <div className={classes.header}>
              <Cobrancas />
              <Typography>Clientes</Typography>
          </div>
          <div className={classes.container}>
              <div className={classes.botaoPrevistas}>
                  <Typography>Previstas</Typography>
                  <Typography className={classes.numeroPrevistas}>0</Typography>
              </div>
              <div className={classes.botaoVencidas}>
                  <Typography>Vencidas</Typography>
                  <Typography className={classes.numeroVencidas}>0</Typography>
              </div>
              <div className={classes.botaoPagas}>
                  <Typography>Pagas</Typography>
                  <Typography className={classes.numeroPagas}>0</Typography>
              </div>
          </div>
      </div>
  );
}