import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    productDetails: null
};

export const productSlice = createSlice({
    name: 'PRODUCTDETAILS',
    initialState,
    reducers: {
        updateproduceState: (state, action) => {
            state.productDetails = action.payload
        }
    }
});

export const { updateproduceState } = productSlice.actions;
export default productSlice.reducer;