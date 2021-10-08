import { Box } from '@material-ui/core';
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as Deslogar } from "../../assets/deslogar.svg";
import { ReactComponent as Editar } from "../../assets/editar.svg";
import { ReactComponent as IconPerfil } from "../../assets/iconPerfil.svg";
import BasicModal from '../BasicModal';
import useStyles from "./styles.js";


export default function Menu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log("handleOpen")
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function deslogar() {
    localStorage.removeItem('token');
    history.push("/");
  }
  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <div>
      <IconPerfil className={classes.iconPerfil} onClick={handleClick} />
      <Popover
        id={id}
        openPopover={openPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{
            color: 'black',
            width: 100,
          }}
        >
          <div className={classes.lineMenu}>
            <Button
              onClick={() => handleOpen()}>
              <Editar />
              <Typography
                sx={{
                  textTransform: 'none',
                  color: 'black'
                }} variant="caption" >
                Editar
              </Typography>
            </Button>
          </div>

          <div className={classes.deslogar}>
            <Deslogar onClick={() => { deslogar() }} />
            <Typography sx={{ textTransform: 'none' }} variant="caption" >
              Deslogar
            </Typography>
          </div>

        </Box>

        <BasicModal
          open={open}
          handleClose={handleClose}
        />
      </Popover>
    </div>
  );
}