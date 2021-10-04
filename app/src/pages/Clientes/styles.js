import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: "16px 72px"  
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    tituloEditar: {
        fontFamily:'Montserrat',
        fontSize:24,
        fontWeight:'normal',
        textAlign:'left',
        marginBottom:59,
    },
    

}));

export default useStyles;