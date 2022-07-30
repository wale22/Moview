import {createSlice} from '@reduxjs/toolkit'

export const movieSlice=createSlice({
    name:'movie',
    initialState:{
        value:null,
        keyWord:null
    },
    reducers: {
        films: (state, action) => {
            state.value=action.payload
        },

        searchkey: (state, action)=>{
            state.keyWord=action.payload
        }
    },
})

export const { films , searchkey} = movieSlice.actions;
export default movieSlice.reducer;