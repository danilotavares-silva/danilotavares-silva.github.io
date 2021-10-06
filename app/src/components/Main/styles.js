import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root:{
        display: 'flex',
    },

    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: "32px 56px 0px 0px"
    },
    
    container: {
        backgroundColor:'#E5E5E5',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft:264,
    },
}));


export default useStyles;