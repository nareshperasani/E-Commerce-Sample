import {configureStore} from '@reduxjs/toolkit';
import { getTotals } from './cartSlice';
import { productsApi } from './productsApi';
import productsReducer,  { productsFetch } from './productsSlice';
import cartReducer from './cartSlice';


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());