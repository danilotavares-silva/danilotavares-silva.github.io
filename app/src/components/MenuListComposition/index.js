import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormEditar from "../FormEditar"
import { Box } from '@material-ui/core';
import Modal from '@mui/material/Modal';
import { ReactComponent as Deslogar } from "../../assets/deslogar.svg";
import { ReactComponent as Editar } from "../../assets/editar.svg";
import { useHistory } from 'react-router';

function BasicModal() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button onClick={handleOpen}>
        <Editar />
        <Typography sx={{textTransform:'none'}} variant="caption" >
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

export default function MenuListComposition() {
  
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
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <BasicModal/>
        <Deslogar onClick={()=>{deslogar()}}/>
      </Popover>
    </div>
  );
}