import { configureStore } from '@reduxjs/toolkit';

//reducers
import productReducers from './reducers/productSlice';

export const store = configureStore({
    reducer: {
        productReducer: productReducers
    }
})