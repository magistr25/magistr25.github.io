let rerenderEntireTree =()=>{
    console.log('state is changed');
}

let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi! How are uou?', likesCount: 12},
            {id: '2', message: 'It`s my first post', likesCount: 11},
            {id: '3', message: 'Blabla', likesCount: 3},
            {id: '4', message: 'dada', likesCount: 11},

        ],

        newPostText:'it-kamasutra',

    },
    dialogsPage: {
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
        ],

        newMessageText:'it-kamasutra',
    },
    sidebar:{
        friends: ['Andrew', 'Sasha', 'Sveta']
    }

}

export const addPost = ()=>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0

    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state)
}

export const updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state)
}

export const addMessage = ()=>{
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText='';
    rerenderEntireTree(state)
}

export const updateNewPostMessage = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}
export const subscribe =(observer)=>{
rerenderEntireTree = observer;
}



export default state