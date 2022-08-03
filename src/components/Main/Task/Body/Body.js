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

function Body(props) {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box flexBasis="100%" width="100px" paddingX={"5px"} className={"hoverMenu"}>
            <Box onClick={handleClickOpen}>
                <Typography variant="h4" sx={{
                    textDecoration: props.isCompleted ? 'line-through' : 'none'
                }}>{props.header}</Typography>
                <Typography variant="body1" noWrap={true} sx={{
                    textDecoration: props.isCompleted ? 'line-through' : 'none'
                }}>{props.body}</Typography>
                <Typography variant="body2">Last edit: {props.addingDate.toString()}</Typography>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                onClick={(event) => event.stopPropagation()}
            >
                <DialogTitle fontSize="28px">
                    Details about task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography variant="h5">Header: </Typography>
                                <Typography variant="body2">{props.header}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">Body: </Typography>
                                <Typography variant="body2">{props.body}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">Last edit date: </Typography>
                                <Typography variant="body2">{props.addingDate}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">Status: </Typography>
                                <Typography variant="body2">{props.isDeleted ? 'Removed' : props.isCompleted ? 'Completed' : 'In Progress'}</Typography>
                            </Box>
                            <Box></Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" variant="contained" type="reset" sx={{width: '45%'}}
                            onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Body