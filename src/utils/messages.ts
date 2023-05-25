export interface IMessageDetail {
    messageId: number;
    userId: number
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


export const messages = initialState.message;


