import {Box, Typography} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Task(props) {
    if (props.isDeleted) {
        if (props.isCompleted)
            return (
                <Box display="flex" alignItems="center" width="100%" marginBottom="15px" sx={{
                    "&:hover": {
                        borderRadius: "10px",
                        boxShadow: "4px 4px 8px 1px black"
                    }
                }}>
                    <Box padding="5px" marginX="10px"><TaskAltIcon fontSize="large"
                                                                                      color="success"/></Box>
                    <Box flexBasis="100%" width="100px">
                        <Typography variant="h4" sx={{
                            textDecoration: 'line-through'
                        }}>{props.header}</Typography>
                        <Typography variant="body1" noWrap={true} sx={{
                            textDecoration: 'line-through'
                        }}>{props.body}</Typography>
                        <Typography variant="body2">{props.addingDate.toString()}</Typography>
                    </Box>
                    <Box marginX="20px"><RestoreIcon fontSize="large" color="additional"/></Box>
                    <Box marginX="20px"><DeleteOutlineIcon fontSize="large" color="error"/></Box>
                </Box>
            )
        else
            return (
                <Box display="flex" alignItems="center" width="100%" marginBottom="15px" sx={{
                    "&:hover": {
                        borderRadius: "10px",
                        boxShadow: "4px 4px 8px 1px black"
                    }
                }}>
                    <Box padding="5px" marginX="10px"><RadioButtonUncheckedIcon fontSize="large"/></Box>
                    <Box flexBasis="100%" width="100px">
                        <Typography variant="h4">{props.header}</Typography>
                        <Typography variant="body1" noWrap={true}>{props.body}</Typography>
                        <Typography variant="body2">{props.addingDate.toString()}</Typography>
                    </Box>
                    <Box marginX="20px"><RestoreIcon fontSize="large" color="additional"/></Box>
                    <Box marginX="20px"><DeleteOutlineIcon fontSize="large" color="error"/></Box>
                </Box>
            )
    }
    if (props.isCompleted) {
        return (
            <Box display="flex" alignItems="center" width="100%" marginBottom="15px" sx={{
                "&:hover": {
                    borderRadius: "10px",
                    boxShadow: "4px 4px 8px 1px black"
                }
            }}>
                <Box padding="5px" marginX="10px"><TaskAltIcon fontSize="large"
                                                                                  color="success"/></Box>
                <Box flexBasis="100%" width="100px">
                    <Typography variant="h4" sx={{
                        textDecoration: 'line-through'
                    }}>{props.header}</Typography>
                    <Typography variant="body1" noWrap={true} sx={{
                        textDecoration: 'line-through'
                    }}>{props.body}</Typography>
                    <Typography variant="body2">{props.addingDate.toString()}</Typography>
                </Box>
                <Box marginX="20px"><HighlightOffIcon fontSize="large" color="error"/></Box>
            </Box>
        )
    }
    return (
        <>
            <Box display="flex" alignItems="center" width="100%" marginBottom="15px" sx={{
                "&:hover": {
                    borderRadius: "10px",
                    boxShadow: "4px 4px 8px 1px black"
                }
            }}>
                <Box padding="5px" marginX="10px"><RadioButtonUncheckedIcon fontSize="large"/></Box>
                <Box flexBasis="100%" width="100px">
                    <Typography variant="h4">{props.header}</Typography>
                    <Typography variant="body1" noWrap={true}>{props.body}</Typography>
                    <Typography variant="body2">{props.addingDate.toString()}</Typography>
                </Box>
                <Box marginX="20px"><HighlightOffIcon fontSize="large" color="error"/></Box>
            </Box>
            {/*<TaskAltIcon/>*/}
            {/*<NotInterestedIcon/>*/}
            {/*<ErrorOutlineIcon/>*/}
            {/*<HighlightOffIcon/>*/}
            {/*<RemoveCircleOutlineIcon/>*/}
            {/*<AddCircleIcon/>*/}
            {/*<ReplayIcon/>*/}
        </>
    )
}

export default Task