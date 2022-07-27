import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isDarkTheme: false,
        languageManage: {
            currentLanguage: "EN",
            allLanguages: ["EN", "UA"]
        },
    },
    reducers: {
        changeTheme: state => {
            state.isDarkTheme = !state.isDarkTheme
        },
        changeLanguage: (state, action) => {
            state.languageManage.currentLanguage = action.payload.newLanguage
        },
        // setAnchor: (state, action) => {
        //     state.languageManage.menuAnchor = action.payload.anchor
        // }
    }
})

export const { changeTheme, changeLanguage, } = mainSlice.actions

export default mainSlice.reducer
