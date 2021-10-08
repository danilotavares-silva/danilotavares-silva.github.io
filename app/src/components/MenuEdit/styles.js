import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    containerMenuEdit: {
        width: 120,
        height: 100,
        boxShadow: `0px 4px 8px 2px rgba(0, 0, 0, 0.1)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: 8,
        padding: '0 5px',
        position: 'absolute',
        top: 80,
        right: 55
    },
    menuEditLines: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& span': {
            marginLeft: 5
        },
        '&:hover': {
            backgroundColor: '#d3d3d3'
        }
    },
    editIcon: {
        width: 22,
    },
    logoutIcon: {
        width: 24
    }
}));

export default useStyles;