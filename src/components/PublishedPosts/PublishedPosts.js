import React, { Component } from 'react';

import PostItem from './Post';
import parse from 'html-react-parser';

class PublishedPosts extends Component
{
    render(){
       let searchPosts = this.props.posts.filter(
           (post)=>{
               return (post.pTitle.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1 ||
               post.postText.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !==-1);
           }
       );
        return(
            <div> 
                {searchPosts.map((post,index)=>{
                    return <PostItem
                         title={post.pTitle}
                         body={parse(post.postText) }
                         key={index}
                         ></PostItem>
                })}
            </div>
        );
    }
}

export default PublishedPosts;