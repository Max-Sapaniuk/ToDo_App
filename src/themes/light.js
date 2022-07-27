import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        mode: "light",
        primary: {
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
});