import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import ActionForm from "../ActionForm/ActionForm";
import {useTranslation} from "react-i18next";

function Edit(props) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { t } = useTranslation();

    return (
        <>
            <Box padding="20px"
                 className="hoverMenu"
                 onClick={(event) => {
                     event.stopPropagation()
                     handleClickOpen()
                 }}><EditIcon fontSize="large" color="info"/></Box>
            <Dialog
                open={open}
                onClose={handleClose}
                onClick={(event) => event.stopPropagation()}
            >
                <DialogTitle fontSize="28px">
                    {t("Update Task")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <ActionForm id={props.id} header={props.header} body={props.body} handleClose={handleClose} type="edit"/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Edit