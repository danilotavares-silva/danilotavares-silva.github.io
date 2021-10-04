import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor: "#fff",
        borderRadius: "16px",
        width:410,
    },
    header:{
        borderRadius: "16px 16px 0px 0px",
        color:'#fff',
        fontSize:20,
        display:'flex',
        gap:16,
        justifyContent:'center',
        alignItems:'center',
        padding:"33px 0px 33px 0px",
        backgroundColor: '#374952',
    },
    container:{
        fontWeight:'bold',
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        padding:"40px 72px 56px 72px",
        
    },
    botaoPrevistas:{
        borderRadius:8,
        color:"#5197B5",
        width: "100%",
        border:"2px solid #5197B5",
        display:'flex',
        padding:"18px 24px",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:16
    },
    numeroPrevistas:{
        fontSize:36,
    },
    botaoVencidas:{
        borderRadius:8,
        color:"#FF4D4D",
        width: "100%",
        border:"2px solid #FF4D4D",
        display:'flex',
        padding:"18px 24px",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:16
    },
    numeroVencidas:{
        fontSize:36,
    },
    botaoPagas:{
        borderRadius:8,
        color:"#4EC06E",
        width: "100%",
        border:"2px solid #4EC06E",
        display:'flex',
        padding:"18px 24px",
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:16
    },
    numeroPagas:{
        fontSize:36,
    },
}));

export default useStyles;