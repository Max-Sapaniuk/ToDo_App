import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#000'
        },
        info: {
            main: '#C4C4C4'
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
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        "&:hover": {
                            backgroundColor: 'rgba(0,0,0, 0.2)',
                        }
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'black',
                    opacity: 0.8,
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
    }
});