// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '.';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

// Lấy các type từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
