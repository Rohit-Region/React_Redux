import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from './slices/cutomer_slice';
export const store = configureStore({
    devTools:true,
    reducer:{
        customers:CustomerReducer
    }
});
