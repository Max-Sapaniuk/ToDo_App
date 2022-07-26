import {ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import lightTheme from "./themes/light"
import darkTheme from "./themes/dark"

function App() {
  const isDarkTheme = useSelector(state => state.main.isDarkTheme)
  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        Hello World
      </ThemeProvider>
  );
}

export default App;
