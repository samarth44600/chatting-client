import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface IMessageDetail {
    messageId?: number;
    userId?: number
    textMessage: string;
}

export interface IMessage extends Array<IMessageDetail> {

}

export interface IMessages {
    message: IMessage;
}

const initialState: IMessages = {
    message: [],
}


export const messsageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<IMessageDetail>) => {
            const newMessage = {
                messageId: state.message.length + 1,
                userId: action.payload.userId,
                textMessage: action.payload.textMessage
            }

            state.message.push(newMessage);
        }
    }
});


export const { addMessage } = messsageSlice.actions;

export default messsageSlice.reducer;