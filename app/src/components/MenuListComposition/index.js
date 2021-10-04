import * as React from 'react';
import { useContext } from 'react';

import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ReactComponent as IconPerfil } from "../../assets/iconPerfil.svg";
import { ReactComponent as Editar } from "../../assets/editar.svg";
import { ReactComponent as Deslogar } from "../../assets/deslogar.svg";
import FormEditar from "../FormEditar"
import { AuthContext } from '../../contexts/AuthContext';

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
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { deslogar } = useContext(AuthContext);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <IconPerfil/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper sx={{marginLeft:30}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      display:'flex',
                      flexDirection: 'column',
                      justifyContent:'space-between',
                      alignItems:'center',
                      }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem 
                    sx={{
                      display:'flex',
                      alignItems:'center',
                      }}>
                        <BasicModal/>
                    </MenuItem>
                    <MenuItem  
                    sx={{
                      display:'flex',
                      justifyContent:'space-between',
                      alignItems:'center',
                      }}
                    onClick={deslogar}>
                        <Deslogar />
                        <Typography variant="caption" display="block" gutterBottom>
                          Deslogar
                        </Typography>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}