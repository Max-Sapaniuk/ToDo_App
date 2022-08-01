import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isDarkTheme: false,
        languageManage: {
            currentLanguage: "EN",
            allLanguages: ["EN", "UA"]
        },
        tasks: {
            selectedTasks: 'All',
            lastId: 3,
            allTasks: [
                {
                    id: 0,
                    header: "Test task №1",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo.",
                    addingDate: new Date("2022.08.13").toString(),
                    isCompleted: false,
                    isDeleted: false,
                },
                {
                    id: 1,
                    header: "Test task №2",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo.",
                    addingDate: new Date("2022.08.13").toString(),
                    isCompleted: true,
                    isDeleted: false,
                },
                {
                    id: 2,
                    header: "Test task №3",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo.",
                    addingDate: new Date().toString(),
                    isCompleted: false,
                    isDeleted: true,
                },
                {
                    id: 3,
                    header: "Test task №4",
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id mi varius, ornare nisl ut, imperdiet est. Vivamus sed sem porta, lacinia magna malesuada, tempor sem. Etiam semper, neque in suscipit laoreet, mi urna tempor nibh, eu egestas est enim a sapien. Curabitur auctor, ligula nec gravida ultrices, nisl quam varius turpis, et viverra magna sapien eu sapien. Fusce et diam varius, vulputate lacus id, imperdiet tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus rutrum metus, a sodales arcu sollicitudin ut. Nam id massa tristique, vestibulum sapien eu, rutrum erat. Pellentesque commodo.",
                    addingDate: new Date().toString(),
                    isCompleted: true,
                    isDeleted: true,
                }
            ],
        },
    },
    reducers: {
        changeTheme: state => {
            state.isDarkTheme = !state.isDarkTheme
        },
        changeLanguage: (state, action) => {
            state.languageManage.currentLanguage = action.payload.newLanguage
        },
        changeSelectedTasks: (state, action) => {
            state.tasks.selectedTasks = action.payload.newSelectedTasks
        },
        changeTaskStatus: (state, action) => {
            state.tasks.allTasks.forEach((curr) => {
                if (curr.id === action.payload.id) {
                    for (const [key, value] of Object.entries(action.payload)) {
                        curr[key] = value
                    }
                }
            })
        },
        deleteTask: (state, action) => {
            state.tasks.allTasks.forEach((curr, index) => {
                if (curr.id === action.payload.id) {
                    state.tasks.allTasks.splice(index, 1)
                }
            })
        }
    }
})

export const { changeTheme, changeLanguage, changeSelectedTasks, changeTaskStatus, deleteTask, } = mainSlice.actions

export default mainSlice.reducer
