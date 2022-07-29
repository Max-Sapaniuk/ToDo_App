import {Box, Typography} from "@mui/material";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
function AddTask() {
    return (
        <Box display="flex" width={"350px"} padding="5px 0 0 0" sx={{
            "&:hover": {
                borderRadius: "10px",
                boxShadow: "4px 4px 8px 1px black"
            }
        }}>
            <Box padding="5px" marginX="10px"><AddCircleOutlineRoundedIcon fontSize="large" color="additional"/></Box>
            <Typography variant="h4" color="#4545da">Create New Item</Typography>
        </Box>
    )
}
export default AddTask