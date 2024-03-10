import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img
                src='https://sun1-86.userapi.com/s/v1/ig2/ZhLmYDSCxYUnlJPfApyGwHjUYUwSMfqqD8XWKDuA0z-YnFG3IMWpP4BeUgarc_EP9-dg5d9u0W812ffmiD3HEfZd.jpg?size=400x400&quality=95&crop=228,2,440,440&ava=1'
                alt=""/>
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post