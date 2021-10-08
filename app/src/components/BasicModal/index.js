import { Box } from '@material-ui/core';
import FormEditar from "../FormEditar";
import useStyles from "./styles.js";
import { Modal } from '@mui/material';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react';

function BasicModal() {
  const { openEditModal, setOpenEditModal } = useContext(GlobalContext);
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          display: 'grid',
          placeContent: 'center',
          minHeight: '100vh',
        }}>
          <FormEditar onClose={() => setOpenEditModal(false)} />
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;