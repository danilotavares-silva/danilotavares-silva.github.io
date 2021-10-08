import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: "32px 56px 0px 0px",
        position: 'relative'
    },
    container: {
        backgroundColor: '#E5E5E5',
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 264,
    },
    buttonOpen: {
        cursor: 'pointer'
    },
    editMenu: {
        position: 'absolute',
        right: 40,
        top: 100
    }
}));


export default useStyles;