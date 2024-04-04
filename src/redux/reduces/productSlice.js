import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi)=> {
    try {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products?q=${searchQuery}`
        let response = await fetch(url)
        return await response.json()
    } catch(error) {
        thunkApi.rejectWithValue(error.message)
    }
})

export const fetchSingleProduct = createAsyncThunk('product/fetchDetail', async (id, thunkApi)=> {
    try {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products/${id}`
        let response = await fetch(url)
        return await response.json()
    } catch(error) {
        thunkApi.rejectWithValue(error.message) 
    }
})

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action)=> {
            state.isLoading = false
            state.productList = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=> { 
            state.isLoading = false
        })
        .addCase(fetchSingleProduct.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action)=> {
            state.isLoading = false
            state.selectedItem = action.payload
        })
        .addCase(fetchSingleProduct.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})


export const productActions = productSlice.actions
export default productSlice.reducer