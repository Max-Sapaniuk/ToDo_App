import NavBreadcrumbs from "./NavBreadcrumbs/NavBreadcrumbs";
import React from "react";
import Task from "./Task/Task";
import AddTask from "./AddTask/AddTask";

function Main() {
    return (
        <>
            <NavBreadcrumbs/>
            <Task header="Test task №1"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo."
                  addingDate={new Date("2022.08.13")}
                  isCompleted={false}
                  isDeleted={false}
            />
            <Task header="Test task №2"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo."
                  addingDate={new Date("2022.08.13")}
                  isCompleted={true}
                  isDeleted={false}
            />
            <Task header="Test task №3"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo."
                  addingDate={new Date()}
                  isCompleted={false}
                  isDeleted={true}
            />
            <Task header="Test task №4"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo."
                  addingDate={new Date()}
                  isCompleted={true}
                  isDeleted={true}
            />
            <AddTask/>
        </>
    )
}
export default Main