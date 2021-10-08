import PerfilIcon from "../../assets/iconPerfil.svg";
import BasicModal from "../BasicModal";
import MenuEdit from "../MenuEdit/index.js";
import Sidebar from '../Sidebar';
import useStyles from "./styles.js";
import { GlobalContext } from '../../contexts/GlobalContext';
import { useContext } from 'react'

export default function Main({ children }) {
  const classes = useStyles();
  const { openMenu, setOpenMenu } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <Sidebar className={classes.sideBar} />
      <div className={classes.container}>
        <div className={classes.header}>
          <img
            className={classes.buttonOpen}
            src={PerfilIcon}
            alt="Icon Perfil"
            onClick={() => setOpenMenu(!openMenu)}
          />
          {openMenu && <MenuEdit />}

          <BasicModal />
        </div>
        {children}
      </div>
    </div>
  )
}
