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
        boxSizing:'border-box',
        width: 405,
        padding:'0px 72px 0px 72px',
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.1)",
        borderRadius: 16,
        marginBottom: 32,
        "& > div":{
           padding: 0
        },
    },

    form:{
        display:'flex',
        flexDirection: 'column',
        textAlign:'center',
    },


    nome: {
        marginBottom: 76,
    },

    email: {
        marginBottom: 76,
    },

    telefone: {
        marginBottom: 76,
    },

    cpf: {
        marginBottom: 76,
    },

    botao:{
        color: '#fff',
        boxShadow: 'none',
        alignSelf: 'center',
        marginBottom:52,
        padding: "11px 60px",
        borderRadius: 20,
        textTransform:'none',
        backgroundColor: "rgba(218, 1, 117, 0.35)",
        "&:hover":{
            backgroundColor: "rgba(218, 1, 117)"
        }
    },
    tituloEditar: {
        fontFamily:'Montserrat',
        fontSize:24,
        fontWeight:'normal',
        textAlign:'left',
        marginBottom:59,
    },

    close:{
        display:'flex',
        justifyContent:'flex-end',
        marginBottom:14,
        cursor:'pointer',
        marginTop:35,
    },
}));

export default useStyles;