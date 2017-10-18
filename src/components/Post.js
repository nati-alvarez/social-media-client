import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostButtons from './PostButtons';

import {likePost, dislikePost, favoritePost} from '../actions/postActions';

import '../css/post.css';

class Post extends Component {
    constructor(){
        super();
        this.likePost = this.likePost.bind(this);
        this.dislikePost = this.dislikePost.bind(this);
        this.favoritePost = this.favoritePost.bind(this);
    }
    likePost(postid){
        this.props.dispatch(likePost(postid))
    }
    dislikePost(postid){
        this.props.dispatch(dislikePost(postid))
    }
    favoritePost(postid){
        this.props.dispatch(favoritePost(postid))
    }
    formatTimestamp(timestamp){
        var newDate = new Date(timestamp);
        return newDate.toDateString();
    }
    render(){
        if(this.props.posts){
            return(
                <div className="posts-container">
                {this.props.posts.map((post, key)=>{
                    return (
                        <div key={key} className="post">
                            <div className="author">
                                <h5>
                                    <a href={"/users/" + post.author.username}><img className="profile-pic" height='45' width='45' src={post.author.image}/>
                                    {post.author.username}</a>
                                </h5>
                            </div>
                            <time className="timestamp"> Posted On: {this.formatTimestamp(post.createdAt)}</time>
                            <p className="post-body">{post.body}</p>
                            <PostButtons
                                postid={post._id}
                                likes={post.likes}
                                dislikes={post.dislikes}
                                favorites={post.favorites}
                                likePost={this.likePost}
                                dislikePost={this.dislikePost}
                                favoritePost={this.favoritePost}
                            />
                            <a className="post-link" href={"/posts/" + post._id}>Comments {post.comments.length}</a>
                        </div>
                    )
                })}
                </div>
            )
        }else{
            return <p>No Posts</p>;
        }
    }
}

export default connect()(Post);
