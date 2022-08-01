import {Box, Typography} from "@mui/material";

function Body(props) {
    return (
        <Box flexBasis="100%" width="100px">
            <Typography variant="h4" sx={{
                textDecoration: props.isCompleted ? 'line-through' : 'none'
            }}>{props.header}</Typography>
            <Typography variant="body1" noWrap={true} sx={{
                textDecoration: props.isCompleted ? 'line-through' : 'none'
            }}>{props.body}</Typography>
            <Typography variant="body2">{props.addingDate.toString()}</Typography>
        </Box>
    )
}

export default Body