import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"
import Header from "./components/Header/Header";
import React from "react";
import Main from "./components/Main/Main";

function App() {
    const isDarkTheme = useSelector(state => state.main.isDarkTheme)
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Container>
                <Header/>
                <Main/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
