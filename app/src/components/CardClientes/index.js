import React from "react";
import useStyles from "./styles.js";
import { Typography  } from '@material-ui/core';
import { ReactComponent as Clientes } from "../../assets/clientes.svg";

export default function CardClientes() {
  const classes = useStyles(); 
  
  return (
      <div className={classes.root}>
          <div className={classes.header}>
              <Clientes />
              <Typography>Clientes</Typography>
          </div>
          <div className={classes.container}>
              <div className={classes.botaoEmDia}>
                  <Typography>Em dia</Typography>
                  <Typography className={classes.numeroEmDia}>0</Typography>
              </div>
              <div className={classes.botaoInadimplentes}>
                  <Typography>Inadimplentes</Typography>
                  <Typography className={classes.numeroInadimplentes}>0</Typography>
              </div>
          </div>
      </div>
  );
}