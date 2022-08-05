import {createSlice} from "@reduxjs/toolkit";

let initialState;
if (localStorage.getItem("state") !== null)
    initialState = JSON.parse(localStorage.getItem("state"))
else {
    initialState = {
        isDarkTheme: false,
        languageManage: {
            currentLanguage: "EN",
            allLanguages: ["EN", "UA"]
        },
        tasks: {
            selectedTasks: 'All',
            lastId: 0,
            allTasks: [
            ],
        },
    }
    localStorage.setItem("state", JSON.stringify(initialState))
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeTheme: state => {
            state.isDarkTheme = !state.isDarkTheme
            localStorage.setItem("state", JSON.stringify(state))
        },
        changeLanguage: (state, action) => {
            state.languageManage.currentLanguage = action.payload.newLanguage
            localStorage.setItem("state", JSON.stringify(state))
        },
        changeSelectedTasks: (state, action) => {
            state.tasks.selectedTasks = action.payload.newSelectedTasks
            localStorage.setItem("state", JSON.stringify(state))
        },
        changeTaskStatus: (state, action) => {
            state.tasks.allTasks.forEach((curr) => {
                if (curr.id === action.payload.id) {
                    for (const [key, value] of Object.entries(action.payload)) {
                        curr[key] = value
                    }
                    curr.addingDate = new Date().toString()
                }
            })
            localStorage.setItem("state", JSON.stringify(state))
        },
        deleteTask: (state, action) => {
            state.tasks.allTasks.forEach((curr, index) => {
                if (curr.id === action.payload.id) {
                    state.tasks.allTasks.splice(index, 1)
                }
            })
            localStorage.setItem("state", JSON.stringify(state))
        },
        createTask: (state, action) => {
            state.tasks.lastId += 1
            let currentDate = new Date()
            state.tasks.allTasks.push({
                id: state.tasks.lastId,
                header: action.payload.header,
                body: action.payload.body,
                addingDate: `${currentDate.toString().slice(0, currentDate.toString().indexOf("GMT")) }`,
                isCompleted: false,
                isDeleted: false,
            })
            localStorage.setItem("state", JSON.stringify(state))
        }
    }
})

export const {
    changeTheme,
    changeLanguage,
    changeSelectedTasks,
    changeTaskStatus,
    deleteTask,
    createTask
} = mainSlice.actions

export default mainSlice.reducer
