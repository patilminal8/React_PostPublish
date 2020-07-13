import React, { Component } from 'react';
import Search from './search.png';
import Clear from './clear.png';

import './SelectAction.css';

class SelectAction extends Component{
    btnNotActive = {
        background: '#62c7ff',
        color:'black'
    }
    Active = {
        backgroundColor:'hsl(206, 80%, 24%)',
        color:'white',
        borderColor:'white'
    }

    toggleComponentHandler = (param) =>{
        this.props.btnClick(param);

    }

    render(){
        return(
            <div className="head-container">
                <div className="Search">
                <img className="Search-img-left" src={Search} alt=""></img>
                <input  type="text" value={this.props.searchStr} onChange={this.props.searchInputChanged}></input>
                <img className="Search-img-right" src={Clear} alt="" onClick={this.props.clearClicked}></img>
                </div>
                <hr/>
                <button style={this.props.btnActive?this.Active:this.btnNotActive} onClick={this.toggleComponentHandler.bind(this,'form')}>New Post</button>
                <button style={this.props.btnActive?this.btnNotActive:this.Active} onClick={this.toggleComponentHandler.bind(this,'posts')}>Published</button>
                <hr/>
            </div>
        );
    };
}

export default SelectAction;