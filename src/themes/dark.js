import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#000",
            paper: "#000"
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