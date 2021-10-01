import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'grid',
        placeContent: 'center',
        minHeight: '100vh',
        "& p":{
            fontSize: 14,
            textAlign: 'center',
            color: "#263238",
        },
    },

    link:{
        color: "rgba(218, 1, 117)"
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

    form:{
        display:'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },

    logo:{
        marginBottom: 92,
    },

    nome: {
        marginBottom: 76,
    },

    email: {
        marginBottom: 76,
    },

    senha:{
        marginBottom: 79,
    },

    botao:{
        color: '#fff',
        boxShadow: 'none',
        alignSelf: 'center',
        marginBottom:58,
        padding: "11px 60px",
        borderRadius: 20,
        backgroundColor: "rgba(218, 1, 117, 0.35)",
        textTransform:'none',
        "&:hover":{
            backgroundColor: "rgba(218, 1, 117)"
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

export default useStyles;