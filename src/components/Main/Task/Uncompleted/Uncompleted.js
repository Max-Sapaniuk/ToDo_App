import {Box} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {useDispatch} from "react-redux";
import {changeTaskStatus} from "../../../../redux/mainSlice";

function Uncompleted(props) {
    let dispatch = useDispatch()

    return (
        <Box padding="20px"
             className={props.isDeleted ? "" : "taskIcons"}
             onClick={() => {
                 if (!props.isDeleted)
                     dispatch(changeTaskStatus({
                         id: props.id,
                         isCompleted: true,
                     }))
             }}>
            <RadioButtonUncheckedIcon fontSize="large"/>
        </Box>
    )
}

export default Uncompleted