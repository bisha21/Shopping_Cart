import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) { // corrected actions to action
            state.push(action.payload);
            console.log(action);
        },

        deleteItem(state,action)
        {
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
});

export default cartSlice.reducer;
export const { addItem,deleteItem } = cartSlice.actions; // corrected createSlice to cartSlice
