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
        fontSize:14,
        color:'#4C4C4C',
        padding:"15px",
        borderBottom:"1px solid #4C4C4C",
        marginBottom: 79,
        fontFamily:'Montserrat'
    },
    
}));

export default useStyles;