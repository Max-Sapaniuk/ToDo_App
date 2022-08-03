import {Box} from "@mui/material";
import {changeTaskStatus} from "../../../../redux/mainSlice";
import {useDispatch} from "react-redux";
import RestoreIcon from '@mui/icons-material/Restore';


function Restore(props) {
    let dispatch = useDispatch()
    return (
        <Box padding="20px"
             className="hoverMenu"
             onClick={() => {
                 dispatch(changeTaskStatus({
                     id: props.id,
                     isDeleted: false,
                 }))
             }}><RestoreIcon fontSize="large" color="additional"/></Box>
    )
}

export default Restore