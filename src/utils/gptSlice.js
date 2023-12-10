import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState: {},
    showGptSearch: false,
    moviesName: null,
    moviesResult:null,
    
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch=! state.showGptSearch
        },
        addgptMovieResult: (state, action) => { 
            const {moviesName,moviesResult }=action.payload
            state.moviesName = moviesName
            state.moviesResult=moviesResult
        }
    },
   

})

export const { toggleGptSearchView,addgptMovieResult } = GptSlice.actions
export default GptSlice.reducer;