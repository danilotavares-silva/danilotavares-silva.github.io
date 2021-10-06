import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    inputLabel:{
        marginLeft:15,
        fontSize:16,
        color:'#374952',
        fontWeight:600,
        fontFamily:'Montserrat'
    },

    input:{
        borderRadius:8,
        fontSize:12,
        color:'#4C4C4C',
        padding:"12px",
        border:"1px solid #4C4C4C",
        marginBottom: 79,
        fontFamily:'Montserrat'
    },
    
}));

export default useStyles;