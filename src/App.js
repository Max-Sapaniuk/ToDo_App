import {Box, Container, CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"
import Header from "./components/Header/Header";
import React from "react";

function App() {
    const isDarkTheme = useSelector(state => state.main.isDarkTheme)
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline />
            <Container>
                <Box marginTop="100px">
                    <Header/>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
