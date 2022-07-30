import React from "react";
import Task from "../Task/Task";
import {Typography} from "@mui/material";

function ShowTasks(props) {
    let tasks;
    switch (props.selectedTasks) {
        case "All":
            tasks = (
                props.allTasks.map((curr) => {
                    return (
                        <Task header={curr.header}
                              id={curr.id}
                              body={curr.body}
                              addingDate={curr.addingDate}
                              isCompleted={curr.isCompleted}
                              isDeleted={curr.isDeleted}
                              key={curr.id}
                        />
                    )
                })
            )
            break;
        case "Completed":
            tasks = (
                props.allTasks.map((curr) => {
                    if (curr.isCompleted && !curr.isDeleted)
                        return (
                            <Task header={curr.header}
                                  id={curr.id}
                                  body={curr.body}
                                  addingDate={curr.addingDate}
                                  isCompleted={curr.isCompleted}
                                  isDeleted={curr.isDeleted}
                                  key={curr.id}
                            />
                        )
                    else return null
                })
            )
            break
        case "In Progress":
            tasks = (
                props.allTasks.map((curr) => {
                    if (!curr.isCompleted && !curr.isDeleted)
                        return (
                            <Task header={curr.header}
                                  id={curr.id}
                                  body={curr.body}
                                  addingDate={curr.addingDate}
                                  isCompleted={curr.isCompleted}
                                  isDeleted={curr.isDeleted}
                                  key={curr.id}
                            />
                        )
                    else return null
                })
            )
            break;
        case "Removed":
            tasks = (
                props.allTasks.map((curr) => {
                    if (curr.isDeleted)
                        return (
                            <Task header={curr.header}
                                  id={curr.id}
                                  body={curr.body}
                                  addingDate={curr.addingDate}
                                  isCompleted={curr.isCompleted}
                                  isDeleted={curr.isDeleted}
                                  key={curr.id}
                            />
                        )
                    else return null
                })
            )
            break;
        default:
            return <Typography variant="h4" m={2} color="darkred">Category with this name doesn't exist!</Typography>
    }
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] !== null)
            return tasks
    }
    return <Typography variant="h4" m={2} color="darkred">There is no any task in this category!</Typography>
}

export default ShowTasks