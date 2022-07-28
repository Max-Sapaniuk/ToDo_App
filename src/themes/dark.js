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
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        "&:hover": {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        }
                    }
                }
            }
        }
    }
});