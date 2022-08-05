import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"
import Header from "./components/Header/Header";
import React, {useEffect} from "react";
import Main from "./components/Main/Main";
import {useTranslation} from 'react-i18next';
import Footer from "./components/Footer/Footer";
import "./App.scss"

function App() {
    const isDarkTheme = useSelector(state => state.main.isDarkTheme)
    const currLng = useSelector(state => state.main.languageManage.currentLanguage)
    const {i18n} = useTranslation();
    useEffect(() => {
        if (i18n.language !== currLng.toLowerCase()) {
            i18n.changeLanguage(currLng.toLowerCase())
        }
    })
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Container sx={{minHeight: {xs: "calc(100vh - 130px)", sm: "calc(100vh - 100px)"}, paddingBottom: "30px"}}>
                <Header/>
                <Main/>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
