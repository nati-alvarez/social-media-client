import React, {Component} from 'react';

class PostButtons extends Component {
    render(){
        return(
            <div className="post-buttons">
                <button onClick={(id)=>{this.props.likePost(this.props.postid)}} className="post-btn like-btn">
                    <i className="fa fa-thumbs-up"></i>&nbsp;
                    Like <span className="counter">{this.props.likes}</span>
                </button>
                <button onClick={(id)=>{this.props.dislikePost(this.props.postid)}} className="post-btn dislike-btn">
                    <i className="fa fa-thumbs-down"></i>&nbsp;
                    Dislike <span className="counter">{this.props.dislikes}</span>
                </button>
                <button onClick={(id)=>{this.props.favoritePost(this.props.postid)}} className="post-btn favorite-btn">
                    <i className="fa fa-heart"></i>&nbsp;
                    Favorite <span className="counter">{this.props.favorites}</span>
                </button>
            </div>
        );
    }
}

export default PostButtons;