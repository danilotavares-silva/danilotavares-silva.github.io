import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    form:{
        display:'flex',
        flexDirection: 'column',
        textAlign:'center',
    },

    logo:{
        marginBottom: 92,
    },

    email: {
        marginBottom: 76,
    },

    botao:{
        color: '#fff',
        boxShadow: 'none',
        alignSelf: 'center',
        marginBottom:58,
        padding: "11px 60px",
        borderRadius: 20,
        textTransform:'none',
        backgroundColor: "rgba(218, 1, 117, 0.35)",
        "&:hover":{
            backgroundColor: "rgba(218, 1, 117, 0.35)",
        },
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