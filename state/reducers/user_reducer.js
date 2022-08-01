import { createSlice } from "@reduxjs/toolkit";


export const regAuthslice= createSlice({
    name: 'regAuth',
    initialState:{value:{} ,bol:''},
    reducers:{
        update:(state,action)=>{
            state.value=action.payload
        },

        exist:(state,action)=>{
            state.bol=action.payload
        }
    }
})


export const {update,exist} = regAuthslice.actions;
export default regAuthslice.reducer