import React from "react";
import useStyles from "./styles.js";
import CardClientes from "../../components/CardClientes/index.js";
import CardCobrancas from "../../components/CardCobrancas/index.js";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.containerHome}>
      <div>
        <CardClientes />
      </div>
      <div>
        <CardCobrancas />
      </div>
    </div>
  );
}