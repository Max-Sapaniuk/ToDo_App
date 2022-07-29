import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#fff'
        },
        additional: {
            main: '#4545da'
        },
        info: {
            main: '#a2a1a1'
        }
    },
    typography: {
        h1: {
            fontFamily: "Quicksand",
            fontSize: "48px",
            fontWeight: "bold",
        },
        subtitle1: {
            fontSize: "28px"
        }
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        "&:hover": {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        }
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    opacity: 0.9,
                    textDecoration: 'none',
                    "&:hover": {
                        textDecoration: 'underline',
                    }
                }
            }
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    "&.MuiBreadcrumbs-root":
                        {
                            fontSize: '28px',
                        }
                }
            }
        }
    },
});