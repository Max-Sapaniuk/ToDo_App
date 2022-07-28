import Calendar from "./Calendar/Calendar";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import AdditionalMenu from "./AdditionalMenu/AdditionalMenu";

function Header() {


    return (
        <Box marginTop="100px">
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar>
                    <Calendar/>
                    <Typography variant="h1" sx={{flexGrow: 1}} marginLeft="30px">
                        Today
                    </Typography>
                    <LanguageSwitcher/>
                    <ThemeSwitcher/>
                    <AdditionalMenu/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
