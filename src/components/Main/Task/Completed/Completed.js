import {Box} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import {useDispatch} from "react-redux";
import {changeTaskStatus} from "../../../../redux/mainSlice";

function Completed(props) {
    let dispatch = useDispatch()

    return (
        <Box padding="20px"
             className={props.isDeleted ? "" : "hoverMenu"}
             style={props.isDeleted ? {cursor: 'not-allowed'} : {}}
             onClick={() => {
                 if (!props.isDeleted)
                     dispatch(changeTaskStatus({
                         id: props.id,
                         isCompleted: false,
                     }))
             }}>
            <TaskAltIcon fontSize="large" color="success"/>
        </Box>
    )
}

export default Completed