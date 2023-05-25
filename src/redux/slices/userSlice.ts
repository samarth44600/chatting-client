import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
    userName: string;
    userId?: string
}


const initialState: IUser = {
    userName: "",
    userId: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {

            state.userName = action.payload.userName;
            state.userId = action.payload.userId;
        }
    }
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;