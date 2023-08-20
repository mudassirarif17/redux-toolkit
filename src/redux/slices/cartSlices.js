import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers:{
        addItem:(state , action)=>{
            state = [...state , action.payload]
        }
    }
})

export const {addItem} = createSlice.actions; 

export default createSlice.reducers;