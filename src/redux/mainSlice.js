import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isDarkTheme: false,
        languageManage: {
            currentLanguage: "EN",
            allLanguages: ["EN", "UA"]
        },
        selectedTasks: 'all',
    },
    reducers: {
        changeTheme: state => {
            state.isDarkTheme = !state.isDarkTheme
        },
        changeLanguage: (state, action) => {
            state.languageManage.currentLanguage = action.payload.newLanguage
        },
        changeSelectedTasks: (state, action) => {
            state.selectedTasks = action.payload.newSelectedTasks
        }
    }
})

export const { changeTheme, changeLanguage, changeSelectedTasks, } = mainSlice.actions

export default mainSlice.reducer
