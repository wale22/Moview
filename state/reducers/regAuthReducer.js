import { createSlice } from "@reduxjs/toolkit";


export const regAuthslice= createSlice({
    name: 'regAuth',
    initialState:{value:'reg'},
    reducers:{
        switchs:(state,action)=>{
            state.value=action.payload
        }
    }
})


export const {switchs} = regAuthslice.actions;
export default regAuthslice.reducer