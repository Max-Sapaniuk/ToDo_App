import Calendar from "./Calendar/Calendar";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import AdditionalMenu from "./AdditionalMenu/AdditionalMenu";
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return (
        <Box paddingTop="100px" paddingBottom="25px">
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar>
                    <Calendar/>
                    <Typography variant="h1" sx={{flexGrow: 1}} marginLeft="30px">
                        {t('Today')}
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
