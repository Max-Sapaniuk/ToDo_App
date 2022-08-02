import {useDispatch} from "react-redux";
import {Box} from "@mui/material";
import {changeTaskStatus} from "../../../../redux/mainSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function Remove(props) {
    let dispatch = useDispatch()
    return (
        <Box padding="20px"
             className="taskIcons"
             onClick={(event) => {
                 event.stopPropagation()
                 dispatch(changeTaskStatus({
                     id: props.id,
                     isDeleted: true,
                 }))
             }}><HighlightOffIcon fontSize="large" color="error"/></Box>
    )
}

export default Remove