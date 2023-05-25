import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import userSlice from "./slices/userSlice";




export const store = configureStore({
    reducer: {
        message: messageSlice,
        user: userSlice
    },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;