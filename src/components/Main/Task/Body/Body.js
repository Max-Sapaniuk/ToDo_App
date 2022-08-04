import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function Body(props) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { t } = useTranslation();

    return (
        <Box flexBasis="100%" width="100px" paddingX={"5px"} className={"hoverMenu"}>
            <Box onClick={handleClickOpen}>
                <Typography variant="h4" sx={{
                    textDecoration: props.isCompleted ? 'line-through' : 'none'
                }}>{props.header}</Typography>
                <Typography variant="body1" noWrap={true} sx={{
                    textDecoration: props.isCompleted ? 'line-through' : 'none'
                }}>{props.body}</Typography>
                <Typography variant="body2">{t("Last edit")}: {props.addingDate.toString()}</Typography>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                onClick={(event) => event.stopPropagation()}
            >
                <DialogTitle fontSize="28px">
                    {t("Details about task")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="h5">{t("Header")}: </Typography>
                                <Typography variant="body2">{props.header}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">{t("Body")}: </Typography>
                                <Typography variant="body2">{props.body}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">{t("Last edit")}: </Typography>
                                <Typography variant="body2">{props.addingDate}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">{t("Status")}: </Typography>
                                <Typography variant="body2">{props.isDeleted ? t('Removed') : props.isCompleted ? t('Completed') : t('In Progress')}</Typography>
                            </Box>
                            <Box></Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" variant="contained" type="reset" sx={{width: '45%'}}
                            onClick={handleClose}>
                        {t("Close")}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Body