import React, { Component } from 'react';

import Header from '../Header/Header';
import SelectAction from '../SelectAction/SelectAction';
import NewPost from '../NewPost/NewPost';
import PublishedPosts from '../PublishedPosts/PublishedPosts';

import './App.css';

class App extends Component {
  //scrollable post list
   style = {
    height: '300px',
    overflowY: 'scroll'
    }

  state = {
    posts:[],
    search:'',
    showNewPostForm: true
  } 

  //update state with new posts
  publishPostHandler = (newPost) => {
    const posts = [...this.state.posts,newPost];
    this.setState({posts:posts , showNewPostForm:false});
    console.log(newPost);
  } 

  //Check which header button clicked
  headerButtonClickHandler = (param) =>{
    console.log(param);
          switch(param)
           {
               case 'form':
                  this.setState({showNewPostForm:true});
                  break;
               case 'posts':
                  this.setState({showNewPostForm:false });
                  break;
               default:
                   break;
           }
           console.log(this.state);
  }

  //search posts based on user input
  searchInputChangeHandler = (event) =>{
    this.setState({search:event.target.value.substr(0,20)});
  }
  
  //clear searchbox
  clearSearchHandler = () =>{
    this.setState({search:''});
  }

  render() {
    return(
    <div className="App">
       <Header>Add Post And Publish</Header>
      <div className="App-container">
     
      <SelectAction
      btnActive={this.state.showNewPostForm}
      searchStr={this.state.search}
      clearClicked={this.clearSearchHandler}
      searchInputChanged= {this.searchInputChangeHandler}
      btnClick = {this.headerButtonClickHandler}>
      </SelectAction>

     {
     this.state.showNewPostForm?
      <NewPost
       publishClicked={this.publishPostHandler}>
       </NewPost>
       :
       <div style={this.style}>
        <PublishedPosts
        searchText={this.state.search}
        posts={this.state.posts}>
        </PublishedPosts>
      </div>
    }
  </div>
    </div>
    );
  };
}

export default App;
