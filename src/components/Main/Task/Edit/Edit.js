import {useDispatch} from "react-redux";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Input,
    TextField
} from "@mui/material";
import {changeTaskStatus} from "../../../../redux/mainSlice";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";
import * as yup from 'yup';
import {useFormik} from "formik";

const validationSchema = yup.object({
    header: yup.string('Enter Header of your task').required('Header is required'),
    body: yup.string('Enter Body of your task').required('Body is required'),
});

function Edit(props) {
    let dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            header: props.header,
            body: props.body,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(changeTaskStatus({id: props.id, ...values}))
            handleClose()
        },
    });

    return (
        <>
            <Box padding="20px"
                 className="taskIcons"
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
                    Update task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <form onSubmit={formik.handleSubmit}>
                            <Box display="flex" flexDirection="column" gap="20px" m={1} width="400px">
                                <TextField
                                    fullWidth
                                    color="info"
                                    id="header"
                                    name="header"
                                    label="Header"
                                    value={formik.values.header}
                                    onChange={formik.handleChange}
                                    error={formik.touched.header && Boolean(formik.errors.header)}
                                    helperText={formik.touched.header && formik.errors.header}
                                />
                                <TextField
                                    fullWidth
                                    color="info"
                                    id="body"
                                    name="body"
                                    label="Body"
                                    multiline
                                    minRows={4}
                                    maxRows={16}
                                    value={formik.values.body}
                                    onChange={formik.handleChange}
                                    error={formik.touched.body && Boolean(formik.errors.body)}
                                    helperText={formik.touched.body && formik.errors.body}
                                />
                                <Box display="flex" justifyContent="space-around">
                                    <Button color="success" variant="contained" type="submit" sx={{width: '45%'}}>
                                        Update
                                    </Button>
                                    <Button color="error" variant="contained" type="reset" sx={{width: '45%'}}
                                            onClick={() => {
                                                handleClose()
                                                setTimeout(() => formik.resetForm(), 100)
                                            }}>
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Edit