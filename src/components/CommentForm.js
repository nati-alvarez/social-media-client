import React, {Component} from 'react';

class CommentForm extends Component{
  render(){
    return (
      <form onSubmit={e=>{this.props.createComment(e)}} className="comment-form">
        <input placeholder="Write a comment..."/>
        <button>Comment</button>
      </form>
    );
  }
}

export default CommentForm;
