import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

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

    botaoAtivo:{
        color: '#fff',
        boxShadow: 'none',
        alignSelf: 'center',
        marginBottom:58,
        padding: "11px 60px",
        borderRadius: 20,
        textTransform:'none',
        backgroundColor: "rgba(218, 1, 117)",
        
    },
    
}));

export default useStyles;