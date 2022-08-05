import Restore from "./Restore/Restore";
import Delete from "./Delete/Delete";
import Body from "./Body/Body";
import Container from "./Container/Container";
import Remove from "./Remove/Remove";
import Edit from "./Edit/Edit";
import Completed from "./Completed/Completed";
import Uncompleted from "./Uncompleted/Uncompleted";
import {Box} from "@mui/material";

function Task(props) {
    return (
        <Container id={props.id} isCompleted={props.isCompleted} isDeleted={props.isDeleted}>
            <Box display="flex" order={{xs: 2, sm: 1}}>
                {
                    props.isCompleted ?
                        <Completed id={props.id} isDeleted={props.isDeleted}/> :
                        <Uncompleted id={props.id} isDeleted={props.isDeleted}/>
                }
            </Box>
            <Box display="flex" width="100%" order={{xs: 1, sm: 2}}>
                <Body {...props}/>
            </Box>
            {
                props.isDeleted ?
                    <>
                        <Box order={{xs: 3, sm: 3}}>
                            <Restore id={props.id}/>
                        </Box>
                        <Box order={{xs: 4, sm: 4}}>
                            <Delete id={props.id}/>
                        </Box>
                    </> :
                    <>
                        <Box order={{xs: 3, sm: 3}}>
                            <Edit id={props.id} header={props.header} body={props.body}/>
                        </Box>
                        <Box order={{xs: 4, sm: 4}}>
                            <Remove id={props.id}/>
                        </Box>
                    </>
            }

        </Container>
    )
}

export default Task