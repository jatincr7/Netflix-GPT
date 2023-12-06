import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const configSlice = createSlice({
    name:'config',
    initialState: {
        language:'en'
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.language=action.payload
        }, 
    },

    
})
export const { changeLanguage } = configSlice.actions
export default configSlice.reducer;