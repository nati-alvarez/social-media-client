import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPost, createComment} from '../actions/singlepostActions';
import {likePost, dislikePost, favoritePost} from '../actions/postActions';

import Post from './Post';
import CommentForm from './CommentForm';

import '../css/singlepost.css';

class SinglePost extends Component {
    constructor(){
      super();
      this.createComment = this.createComment.bind(this);
    }
    createComment(e){
      e.preventDefault();
      var postbody = e.target.children[0].value;
      var postid = this.props.match.params.id;
      if(postbody){
        this.props.dispatch(createComment(postid, postbody));
      }
      e.target.children[0].value = "";
    }
    componentWillMount(){
        var id = this.props.match.params.id;
        this.props.dispatch(getPost(id));
    }
    formatTimestamp(timestamp){
      var date = new Date(timestamp);
      return date.toDateString();
    }
    render(){
        console.log(this.props);
        if(this.props.post.body){
            return (
                <section className="single-post">
                  <Post posts={[this.props.post]}/>

                  <CommentForm createComment={this.createComment}/>

                  <section className="comments">
                    <h5>Comments:</h5>
                    {this.props.post.comments.map(comment=>{
                      return (
                        <div className="comment">
                          <div class="author">
                            <a href={"/users/" + comment.author.username}><h6>
                              <img className="profile-pic" width="45" height="45" src={comment.author.image}/>
                              {comment.author.username}
                            </h6></a>
                          </div>
                          <p>{comment.body}</p>
                        </div>
                      )
                    })}
                  </section>
                </section>
            )
        }else{
            return (<p>Post Not Found</p>);
        }

    }
}

function mapStateToProps(store){
    return {
        post: store.posts.post
    }
}

export default connect(mapStateToProps)(SinglePost);
