const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: '1', name: 'Mary'},
        {id: '2', name: 'Kate'},
        {id: '3', name: 'Alex'},
        {id: '4', name: 'Roman'},
        {id: '5', name: 'Denis'},
        {id: '6', name: 'Olga'}

    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Hello!'},
        {id: '4', message: 'Yo'},
        {id: '5', message: 'Yo'},
        {id: '6', message: 'Yo'}
    ]

}

export const dialogsPageReduser = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],

            }

        default:
            return state
    }

}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export const updateNewMessageBodyActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})
