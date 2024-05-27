import React, {Component, PureComponent} from "react";
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

class MyPosts extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps != this.props && ! nextState != this.state;
    // }

    render() {

        let postsElements =
            this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText)
        }


        return (

            < div className={s.postsBlock}>
                <h3>My posts</h3>
                <SuperAddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}

                </div>
            </div>)
    }
}

export default MyPosts
