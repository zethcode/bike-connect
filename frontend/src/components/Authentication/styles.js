import { createTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import authBG from './../../../assets/images/clothes-rack.jpg';

export const theme = createTheme({
    typography: {
        fontFamily: [
        "Montserrat", 
        "sans-serif"
        ].join(',')
    },
    palette: {
        primary: {
        light: '#50D2D8',
        main: '#29B3B9',
        dark: '#1F878C',
        contrastText: '#fff',
        },
        secondary: {
        light: '#D85650',
        main: '#B93029',
        dark: '#8C241F',
        contrastText: '#fff',
        },
    }
});

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundImage: `url(${authBG})`,
        // backgroundSize: '1920px 1550px',
        backgroundSize: 'cover',
    },
    // toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        paddingTop: '2em',
        height: '58.3em',
        [theme.breakpoints.down('lg')]: {
            paddingTop: '2em',
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '2em',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '4em',
        },
    },
    paper: {
        height: '42em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    container: {
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(8),
        padding: theme.spacing(4)
    },
    formControl: {
        marginTop: theme.spacing(2)
    },
    submitButton: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
        borderRadius: '1.5em',
        width: '13em'
    },
    authLogo: {
        width: '55%',
        height: '55%',
        marginBottom: '1rem'
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    link: {
        textDecoration: 'inherit',
        color: '#29B3B9'
    }
}));

export default useStyles