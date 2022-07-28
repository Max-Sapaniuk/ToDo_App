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
        }
    }
});