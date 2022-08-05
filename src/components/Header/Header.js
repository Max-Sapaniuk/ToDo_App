import Calendar from "./Calendar/Calendar";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import AdditionalMenu from "./AdditionalMenu/AdditionalMenu";
import {useTranslation} from 'react-i18next';

function Header() {
    const {t} = useTranslation();
    return (
        <Box paddingTop="100px" paddingBottom="25px">
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar sx={{justifyContent: {xs: "center", sm: "space-between"}, flexWrap: "wrap", gap: 3}}>
                    <Box display="flex" alignItems="center"
                        sx={{}}
                    >
                        <Calendar/>
                        <Typography variant="h1" marginLeft="30px">
                            {t('Today')}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <LanguageSwitcher/>
                        <ThemeSwitcher/>
                        <AdditionalMenu/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

// <Grid container>
//     <Grid item xs={12} display="flex" alignItems="center" spacing={3}>
//         <Calendar/>
//         <Typography variant="h1">
//             {t('Today')}
//         </Typography>
//     </Grid>
//     {/*<Typography variant="h1" sx={{flexGrow: 1}} marginLeft="30px">*/}
//     {/*    {t('Today')}*/}
//     {/*</Typography>*/}
//     <Grid item xs={12} display="flex">
//         <LanguageSwitcher/>
//         <ThemeSwitcher/>
//         <AdditionalMenu/>
//     </Grid>
// </Grid>
export default Header;
