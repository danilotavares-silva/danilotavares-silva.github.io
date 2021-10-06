import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'grid',
        placeContent: 'center',
        minHeight: '100vh',
        "& p":{
            fontSize: 14,
            textAlign: 'center',
            color: "#263238",
        },
    },

    link:{
        color: "rgba(218, 1, 117)"
    },

    card:{
        boxSizing: 'border-box',
        width: 405,
        padding:'48px 72px 0px 72px',
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.1)",
        borderRadius: 16,
        marginBottom: 32,
        "& > div":{
           padding: 0
        },
    },

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default useStyles;