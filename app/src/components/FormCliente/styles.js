import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        flexDirection:'column'
        
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
   
}));

export default useStyles;