import {Container, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"
import Calendar from "./components/Calendar/Calendar";

function App() {
    const isDarkTheme = useSelector(state => state.main.isDarkTheme)
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <Calendar/>
            </Container>
        </ThemeProvider>
    );
}

export default App;
