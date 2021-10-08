import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    iconPerfil: {
        cursor: 'pointer',
    },
    popover: {
        marginTop: 5,
        width: 100,
        height: 97,
        display: 'flex',
        flexDirection: 'column',
    },
    lineMenu: {
        display: 'flex'
    }
}));

export default useStyles;