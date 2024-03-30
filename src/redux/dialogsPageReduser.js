const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


export const dialogsPageReduser = (state, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody,
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state

        default:
            return state
    }

    return state
}

export const sendMessageActionCreator = ()=> ({type:SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (text)=>
    ({type:UPDATE_NEW_MESSAGE_BODY, body: text})