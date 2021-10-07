import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormEditar from "../FormEditar"
import { Box } from '@material-ui/core';
import Modal from '@mui/material/Modal';
import { ReactComponent as Deslogar } from "../../assets/deslogar.svg";
import { ReactComponent as Editar } from "../../assets/editar.svg";
import { ReactComponent as IconPerfil } from "../../assets/iconPerfil.svg";
import { useHistory } from 'react-router';
import useStyles from "./styles.js";


function BasicModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button className={classes.editar} onClick={handleOpen}>
        <Editar />
        <Typography sx={{textTransform:'none',
        color:'black'}} variant="caption" >
          Editar
        </Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            display:'grid', 
            placeContent:'center',
            minHeight: '100vh',}}>
          <FormEditar onClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}

export default function Menu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function deslogar(){
    localStorage.removeItem('token');
    history.push("/");
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconPerfil className={classes.iconPerfil} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
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
            colo: 'black',
            display: 'flex',
            flexDirection:'column',
            width: 100,
            height: 93,
            padding:'17px 0px 0px 10px',
            gap:24
          }}
        >
          <BasicModal />
          <div className={classes.deslogar}>
            <Deslogar onClick={() => { deslogar() }} />
            <Typography sx={{ textTransform: 'none' }} variant="caption" >
              Deslogar
            </Typography>
          </div>
        </Box>


      </Popover>
    </div>
  );
}