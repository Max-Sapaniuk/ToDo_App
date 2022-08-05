import {Box} from "@mui/material";

function Container(props) {
    return (
        <Box display="flex"
             flexWrap={{xs: "wrap", sm: "nowrap"}}
             justifyContent="space-evenly"
             alignItems="center"
             width="100%"
             marginBottom="15px"
             paddingX={"10px"}
             sx={{
                 "&:hover": {
                     borderRadius: "10px",
                     boxShadow: "4px 4px 8px 1px black",
                 }
             }}
        >{props.children}</Box>
    )
}

export default Container