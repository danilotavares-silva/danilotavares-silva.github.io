import React from 'react'
import useStyles from "./styles.js"
import { FormControl, Input, InputLabel } from '@material-ui/core';
import "./styles"

function TextInputCliente(props) {

  const classes = useStyles();

  return (
    <FormControl>
      <InputLabel  
        className={classes.inputLabel}
        shrink
        error={props.error}
        htmlFor={props.id}
      >
      {props.label}
      </InputLabel>
      <Input 
        className={classes.input}
        placeholder={props.placeholder}
        id={props.id} 
        type="text"
        error={props.error}
        {...props.register()}
        disableUnderline={true}
      />
    </FormControl>
  )
}

export default TextInputCliente;