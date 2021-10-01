import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
    },

    container:{
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },

    headerContainer:{
        textAlign: 'right',
    },

    header:{
        display: 'flex',
        justifyContent: "flex-end",
        padding: '32px 54px 0px 0px'
    },

    iconPerfil:{
        cursor: "pointer"
    },

    menu:{
        display: 'flex',
        flexDirection: 'column',
        zIndex: theme.zIndex.drawer + 1,
        padding: "18px 10px 0px 10px",
        marginTop: 5,
    },

    linkMenu:{
        display: 'flex',
        marginBottom: '18px',
        cursor: "pointer"
    },

    editar:{
        marginLeft: '6px',
    },

    deslogar:{
        marginLeft: '4px',
    },

    card:{
        boxSizing: 'border-box',
        width: 405,
        padding:'48px 72px 0px 72px',
        borderRadius: 16,
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.1)",
        marginBottom: 32,
        "& > div":{
           padding: 0
        },
    },

    rootCard:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        zIndex: theme.zIndex.drawer + 1,
    },

    
    
}));

export default useStyles;