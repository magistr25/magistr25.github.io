import {addPostActionCreator, deletePost, profilePageReduser} from "./redux/profilePageReduser";

it('new post should be added', () => {
    //1. test data
    let action = addPostActionCreator('Hello World');
    let initialState = {
        posts: [
            { id: '1', message: 'Hi! How are you?', likesCount: 12 },
            { id: '2', message: 'It`s my first post', likesCount: 11 },
            { id: '3', message: 'Blabla', likesCount: 3 },
            { id: '4', message: 'dada', likesCount: 11 }
        ]
    };
    //2. action
    let newState = profilePageReduser(initialState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5); // ожидаем, что длина массива posts станет равной 5
});


it('after deleting length of message should be decrement ', () => {
    //1. test data
    let action = deletePost('1');
    let initialState = {
        posts: [
            { id: '1', message: 'Hi! How are you?', likesCount: 12 },
            { id: '2', message: 'It`s my first post', likesCount: 11 },
            { id: '3', message: 'Blabla', likesCount: 3 },
            { id: '4', message: 'dada', likesCount: 11 }
        ]
    };
    //2. action
    let newState = profilePageReduser(initialState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3); // ожидаем, что длина массива posts станет равной 5
});
