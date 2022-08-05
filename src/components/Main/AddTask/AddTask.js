import {Box, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ActionForm from "../Task/ActionForm/ActionForm";
import {useState} from "react";
import {useTranslation} from "react-i18next";

function AddTask() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const {t} = useTranslation();

    return (
        <>
            <Box display="inline-flex"
                 className="hoverMenu"
                 padding="5px 10px 0 0"
                 sx={{
                     "&:hover": {
                         borderRadius: "10px",
                         boxShadow: "4px 4px 8px 1px black"
                     }
                 }}
                 onClick={handleClickOpen}>
                <Box padding="5px" marginX="10px"><AddCircleOutlineRoundedIcon fontSize="large"
                                                                               color="additional"/></Box>
                <Typography variant="h4" color="#4545da">{t("Create New Task")}</Typography>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                onClick={(event) => event.stopPropagation()}
            >
                <DialogTitle fontSize="28px">
                    {t("Create Task")}
                </DialogTitle>
                <DialogContent>
                    <ActionForm handleClose={handleClose} type="create"/>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddTask