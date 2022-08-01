import {Box} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Restore from "./Restore/Restore";
import Delete from "./Delete/Delete";
import Body from "./Body/Body";
import Container from "./Container/Container";
import Remove from "./Remove/Remove";

function Task(props) {
    return (
        <Container id={props.id} isCompleted={props.isCompleted} isDeleted={props.isDeleted}>
            <Box padding="15px">
                {
                    props.isCompleted ?
                        <TaskAltIcon fontSize="large" color="success"/> :
                        <RadioButtonUncheckedIcon fontSize="large"/>
                }
            </Box>
            <Body isCompleted={props.isCompleted}
                  header={props.header}
                  body={props.body}
                  addingDate={props.addingDate}/>
            {
                props.isDeleted ?
                    <>
                        <Restore id={props.id}/>
                        <Delete id={props.id}/>
                    </> :
                    <Remove id={props.id}/>
            }
        </Container>
    )
}

export default Task