import React from "react";
import MenuListComposition from "../../components/MenuListComposition";
import useStyles from "./styles.js";

export default function Home() {
  const classes = useStyles(); 


  return (
    <div className={classes.header}>
      <MenuListComposition className={classes.iconPerfil}/>
    </div>
    
  );
}