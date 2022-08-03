import {Box} from "@mui/material";
import {deleteTask} from "../../../../redux/mainSlice";
import {useDispatch} from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Delete(props) {
    let dispatch = useDispatch()
    return (
        <Box padding="20px"
             className="hoverMenu"
             onClick={() => {
                 dispatch(deleteTask({
                     id: props.id,
                 }))
             }}><DeleteOutlineIcon fontSize="large" color="error"/></Box>
    )
}

export default Delete