import NavBreadcrumbs from "./NavBreadcrumbs/NavBreadcrumbs";
import React from "react";
import AddTask from "./AddTask/AddTask";
import {useSelector} from "react-redux";
import ShowTasks from "./ShowTasks/ShowTasks";
import "./mainStyle.scss"

function Main() {
    const tasks = useSelector(state => state.main.tasks)
    return (
        <>
            <NavBreadcrumbs/>
            <ShowTasks selectedTasks={tasks.selectedTasks} allTasks={tasks.allTasks}/>
            <AddTask/>
        </>
    )
}
export default Main