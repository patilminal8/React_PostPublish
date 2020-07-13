import React from 'react';
import './PublishedPosts.css';

const PostItem = (props) => {
  
    return(
        <div className="postItem">
            <div className="title">{props.title}</div>
            <p>{props.body}</p>
        </div>
    );
}

export default PostItem;