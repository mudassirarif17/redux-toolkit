import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers:{
        addItem:(state , action)=>{
            // ...Spread out the old items
            // state is imutable we cant change it
            state.push(action.payload)

        }
    }
})

export const {addItem} = cartSlice.actions; 

export default cartSlice.reducer;