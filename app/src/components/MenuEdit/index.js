import { useContext } from 'react';
import DeslogarIcon from "../../assets/deslogar.svg";
import EditarIcon from "../../assets/editar.svg";
import { GlobalContext } from '../../contexts/GlobalContext';
import useStyles from "./styles.js";

function MenuEdit() {
  const classes = useStyles();
  const { openEditModal, setOpenEditModal } = useContext(GlobalContext);

  return (
    <div className={classes.containerMenuEdit}>
      <div
        className={classes.menuEditLines}
        onClick={() => setOpenEditModal(!openEditModal)}
      >
        <img className={classes.editIcon} src={EditarIcon}></img>
        <span>Editar</span>
      </div>
      <div className={classes.menuEditLines}>
        <img className={classes.logoutIcon} src={DeslogarIcon}></img>
        <span>Deslogar</span>
      </div>
    </div>
  );
}

export default MenuEdit;