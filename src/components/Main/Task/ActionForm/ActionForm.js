import * as yup from "yup";
import {useFormik} from "formik";
import {changeTaskStatus, createTask} from "../../../../redux/mainSlice";
import {useDispatch} from "react-redux";
import {Box, Button, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";

function ActionForm(props) {
    let dispatch = useDispatch()

    const { t } = useTranslation();

    const validationSchema = yup.object({
        header: yup.string('Enter Header of your task').required(t('Header is required')),
        body: yup.string('Enter Body of your task').required(t('Body is required')),
    });

    const formik = useFormik({
        initialValues: {
            header: props.type === "edit" ? props.header : "",
            body: props.type === "edit" ? props.body : "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            switch (props.type) {
                case "edit":
                    dispatch(changeTaskStatus({id: props.id, ...values}))
                    props.handleClose()
                    break;
                case "create":
                    dispatch(createTask({...values}))
                    props.handleClose()
                    break;
                default:
                    throw new Error("no type with this name")
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box display="flex" flexDirection="column" gap="20px" m={1} width={{xs: "250px", sm: "400px"}}>
                <TextField
                    fullWidth
                    color="info"
                    id="header"
                    name="header"
                    label={(t("Header"))}
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
                    label={(t("Body"))}
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
                        {props.type === "edit" ? (t("Update")) : (t("Create"))}
                    </Button>
                    <Button color="error" variant="contained" type="reset" sx={{width: '45%'}}
                            onClick={() => {
                                props.handleClose()
                                setTimeout(() => formik.resetForm(), 100)
                            }}>
                        {(t("Cancel"))}
                    </Button>
                </Box>
            </Box>
        </form>
    )
}

export default ActionForm