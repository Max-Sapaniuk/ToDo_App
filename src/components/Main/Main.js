import {Breadcrumbs, Link, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedTasks} from "../../redux/mainSlice";

function Main() {
    const selectedTasks = useSelector(state => state.main.selectedTasks)
    const dispatch = useDispatch()
    if (selectedTasks === "All") {
        return (
            <Breadcrumbs>
                <Typography variant="subtitle1">{selectedTasks}</Typography>
            </Breadcrumbs>
        )
    }
    return (
        <>
            <Breadcrumbs>
                <Link href=""
                      onClick={(event) => {
                    event.preventDefault()
                    dispatch(changeSelectedTasks({newSelectedTasks: 'All'}))
                }}>All</Link>
                <Typography variant="subtitle1">{selectedTasks}</Typography>
            </Breadcrumbs>
        </>
    )
}

export default Main