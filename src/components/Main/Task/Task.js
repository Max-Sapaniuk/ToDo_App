import Restore from "./Restore/Restore";
import Delete from "./Delete/Delete";
import Body from "./Body/Body";
import Container from "./Container/Container";
import Remove from "./Remove/Remove";
import Edit from "./Edit/Edit";
import Completed from "./Completed/Completed";
import Uncompleted from "./Uncompleted/Uncompleted";

function Task(props) {
    return (
        <Container id={props.id} isCompleted={props.isCompleted} isDeleted={props.isDeleted}>
            {
                props.isCompleted ?
                    <Completed id={props.id} isDeleted={props.isDeleted}/> :
                    <Uncompleted id={props.id} isDeleted={props.isDeleted}/>
            }
            <Body {...props}/>
            {
                props.isDeleted ?
                    <>
                        <Restore id={props.id}/>
                        <Delete id={props.id}/>
                    </> :
                    <>
                        <Edit id={props.id} header={props.header} body={props.body}/>
                        <Remove id={props.id}/>
                    </>
            }
        </Container>
    )
}

export default Task