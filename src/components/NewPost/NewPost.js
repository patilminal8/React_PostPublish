import React, { Component } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const initialState = {
        pTitle:'',
        postText:'',
        postTitleError:'',
        postBodyError:''
}

class NewPost extends Component {
    state = initialState;

    validateForm = () => {
       let postTitleError = '';
       let postBodyError ='';

       postTitleError = (!this.state.pTitle.length)?'Please enter the title of post':'';
       postBodyError = (!this.state.postText.length)?'Please enter the body of post':'';
       
       if(postTitleError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }else{
            this.titleStyle = {};
       }

       if(postBodyError)
       {
           this.setState({postTitleError:postTitleError , postBodyError:postBodyError});
           return false;
       }else{
            this.postBodySTyle = {};
       }

       return true;
    }

    handleInput = (event) =>{
        this.setState({pTitle: event.target.value });
    }

    postPublishHandler = (event) => {
        event.preventDefault();
        const isValid = this.validateForm();
        if(isValid)
        {
            //console.log(this.state);
            this.props.publishClicked(this.state);
            this.setState(initialState);
        }     
    }

    render(){
        return(
            <form onSubmit={this.postPublishHandler}>
            <div>
            <br/>
             <input style={(this.state.postTitleError)?{border: '2px solid red'}:{}} type="text" value={this.state.pTitle} onChange={this.handleInput} placeholder="Post title"></input>
             <div style={{color:'red',fontSize:15}}>{this.state.postTitleError}</div>
             </div>
             <br/>
             <div>
                 <div style={(this.state.postBodyError)?{border: '2px solid red'}:{}}>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onInit={editor => {
                console.log( 'Editor is ready to use!', editor );
                }}   
                onChange={ ( event, editor ) => {
                const data = editor.getData();
                this.setState({postText: data });
                console.log( { event, editor, data } );
                } }
                value={this.state.postText}
                
            />
            </div>
              <div style={{color:'red',fontSize:15}}>{this.state.postBodyError}</div><br/>
             <button onClick={this.validateForm}>Publish</button>
            </div>
        </form>
        );
    }
}

export default NewPost;