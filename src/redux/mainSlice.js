import {createSlice} from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        isDarkTheme: false
    },
    reducers: {
        changeTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme
        },
    }
})

export const { changeTheme } = mainSlice.actions

export default mainSlice.reducer
