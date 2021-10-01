import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root:{
        display: 'flex',
        flexDirection:'column',
        height: '965px',
        backgroundColor: '#263238',
        width: 264,
        "& p":{
            fontSize: 14,
            textAlign: 'center',
            color: "#263238",
        },
    },

    logo:{
        padding: '32px 0px 58px 48px'
    },

    linkSidebar:{
        display: 'flex',
        alignItems: 'center',
        padding: '11px 0px 11px 48px',
        "&:hover":{
            backgroundColor: "#374952",
            cursor:'pointer'
        }
    },

    letraSidebar:{
        fontFamily:'Montserrat',
        color:'#fff',
        fontSize:12,
        marginLeft: 20,
    },

    botao:{
        color: '#fff',
        boxShadow: 'none',
        alignSelf: 'center',
        padding: "8px",
        borderRadius: 20,
        marginTop: 310,
        backgroundColor: "#DA0175",
        width: 220,
        textTransform:'none',
        fontSize: 14,
        "&:hover":{
            backgroundColor: "#DA0175",
            cursor:'pointer'
        }
    },
}));

export default useStyles;