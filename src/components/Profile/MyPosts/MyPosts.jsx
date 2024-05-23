import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/formsControls/formsControls";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePageReduser";

const maxLenght10 = maxLenghtCreator(10)


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={TextArea} placeholder={'Enter your message'}
                       validate={[required, maxLenght10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

let SuperAddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }




    return (

        < div className={s.postsBlock}>
            <h3>My posts</h3>
            <SuperAddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>)
}
export default MyPosts
