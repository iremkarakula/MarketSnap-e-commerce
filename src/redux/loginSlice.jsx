import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const getLogin = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://reqres.in/api/workintech", data);
            if (data.isRemember) {
                localStorage.setItem("user", response.data.isRemember)
            }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const getUserFromStorage = () => {
    const storedUser = localStorage.getItem('user')
    return storedUser ? storedUser : null
}


const initialState = {
    user: getUserFromStorage(),
    isLoading: false,
    error: null,
    isAuthenticated: !!getUserFromStorage(),
    isRemember: !!getUserFromStorage(),

}


export const loginSlice = createSlice({
    name: 'user/login',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.isRemember = false
            localStorage.removeItem('user')
        },


    },
    extraReducers: (builder) => {
        builder.addCase(getLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;
            state.isRemember = action.payload.isRemember;

        }).addCase(getLogin.rejected, (state, action) => {
            state.error = action.payload;
        }).addCase(getLogin.pending, (state) => {
            state.isLoading = true;
        })
    }
});

export const { logout } = loginSlice.actions

export default loginSlice.reducer


