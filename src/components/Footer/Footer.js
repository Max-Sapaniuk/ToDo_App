import {Box, Link, Typography} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {useTranslation} from "react-i18next";
function Footer(props) {
    const { t } = useTranslation();

    return (
        <Box display="flex"
             position="absolute"
             left={0}
             bottom={0}
             right={0}
             bgcolor="footer.main"
             height="100px"
             justifyContent="space-around"
             alignItems="center">
            <Box display="flex" alignItems="center">
                <CopyrightIcon/> <Typography>{t("copyright")}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap="5px">
                <Typography>{t("contacts")}: </Typography>
                <Box display="flex" alignItems="center" gap="5px">
                    <PhoneIcon/><Typography><Link href="tel: +380964624638">+380964624638</Link></Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="5px">
                    <EmailIcon/><Typography><Link href="mailto: maksym.sapaniuk@gmail.com">maksym.sapaniuk@gmail.com</Link></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer