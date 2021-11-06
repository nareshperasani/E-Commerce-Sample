import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async ()=>{
            const response = await axios.get("https://fakestoreapi.com/products?limit=12")
            return response?.data
        }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})

const {} = productsSlice.actions;

export default productsSlice.reducer;