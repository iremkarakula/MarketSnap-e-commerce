import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const getRegister = createAsyncThunk(
    "user/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://reqres.in/api/workintech", data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);





const initialState = {
    user: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,


}


export const registerSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getRegister.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;

        }).addCase(getRegister.rejected, (state, action) => {
            state.error = action.payload;
        }).addCase(getRegister.pending, (state) => {
            state.isLoading = true;
        })
    }
});

export const { } = registerSlice.actions

export default registerSlice.reducer


