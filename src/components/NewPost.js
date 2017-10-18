import React, {Component} from 'react';
import {connect} from 'react-redux';

import {makeNewPost} from '../actions/postActions';

class NewPost extends Component {
    constructor(){
        super();
        this.newPost = this.newPost.bind(this);
    }
    componentWillMount(){
        if(!this.props.user){
            this.props.history.push('/');
        }
    }
    newPost(e){
        e.preventDefault();
        var postbody = document.querySelector("#post-body").value;
        if(postbody){
            this.props.dispatch(makeNewPost(postbody));
            document.querySelector("#post-body").value = "";
            return;
        }
        this.props.dispatch({type: "NEW_POST_ERR", payload: "All Fields Are Required"});
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <p id="back"><a href="/">Home</a></p>
                <form onSubmit={(e)=>{this.newPost(e)}} className="auth-form">
                    <h3>Make A New Post!</h3>
                    <textarea id="post-body"></textarea>
                    <button>Create Post</button>
                    <p className="auth-err">{this.props.err}</p>
                    <p>{this.props.status}</p>
                </form> 
            </div>
        )
    }
}


function mapStateToProps(store){
    return {
        user: store.auth.user,
        err: store.posts.err,
        status: store.posts.status
    }
}

export default connect(mapStateToProps)(NewPost);