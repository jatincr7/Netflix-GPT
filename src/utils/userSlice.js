import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
   
    reducers: {
        addUser: (action, state) => {
            return action.payload
        },
        removeUser: (action, state) => {
             return action.payload
        },
    },
})
export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer;