import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';








const initialState = {
    name: null,
    surname: null,
    favList: JSON.parse(localStorage.getItem("favList")) || [],
    orders: [],
    error: null,

}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleFavList: (state, action) => {
            const index = state.favList.findIndex(e => e.id === action.payload.id);
            if (index === -1) {
                state.favList.push(action.payload);
            } else {
                state.favList.splice(index, 1);
            }
            localStorage.setItem("favList", JSON.stringify(state.favList));
        },
        addToFavList: (state, action) => {
            const index = state.favList.findIndex(e => e.id === action.payload.id);
            if (index === -1) {
                state.favList.push(action.payload);
            }
            localStorage.setItem("favList", JSON.stringify(state.favList));
        }
    }
});

export const { toggleFavList, addToFavList } = userSlice.actions

export default userSlice.reducer


