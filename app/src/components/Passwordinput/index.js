import React from 'react'
import { useState } from 'react';
import useStyles from "./styles.js"
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import "./styles"

function PasswordInput(props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
        className={`${isPasswordVisible ? classes.input : classes.inputMaior}`}
        id={props.id} 
        type={isPasswordVisible ? "text" : "password"}
        error={props.error}
        {...props.register()}
        disableUnderline={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              
              aria-label="toggle password visibility"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <Visibility color='disabled'/> : <VisibilityOff color='disabled' />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  )
}

export default PasswordInput;