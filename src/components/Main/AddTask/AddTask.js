import {Box, Dialog, DialogContent, DialogContentText, DialogTitle, Typography} from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ActionForm from "../Task/ActionForm/ActionForm";
import {useState} from "react";

function AddTask() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box display="flex"
                 width="350px"
                 className="hoverMenu"
                 padding="5px 0 0 0"
                 sx={{
                     "&:hover": {
                         borderRadius: "10px",
                         boxShadow: "4px 4px 8px 1px black"
                     }
                 }}
                 onClick={handleClickOpen}>
                <Box padding="5px" marginX="10px"><AddCircleOutlineRoundedIcon fontSize="large"
                                                                               color="additional"/></Box>
                <Typography variant="h4" color="#4545da">Create New Task</Typography>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                onClick={(event) => event.stopPropagation()}
            >
                <DialogTitle fontSize="28px">
                    Create task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <ActionForm handleClose={handleClose} type="create"/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddTask