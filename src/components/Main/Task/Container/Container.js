import {Box} from "@mui/material";
import {changeTaskStatus} from "../../../../redux/mainSlice";
import {useDispatch} from "react-redux";

function Container(props) {
    let dispatch = useDispatch()
    return (
        <Box display="flex"
             alignItems="center"
             width="100%"
             marginBottom="15px"
             paddingX={"10px"}
             sx={{
                 "&:hover": {
                     borderRadius: "10px",
                     boxShadow: "4px 4px 8px 1px black",
                     cursor: "pointer"
                 }
             }}
             // onClick={!props.isDeleted ? () => {
             //     dispatch(changeTaskStatus({
             //         id: props.id,
             //         isCompleted: !props.isCompleted,
             //     }))
             // } : () => {}}
        >{props.children}</Box>
    )
}

export default Container