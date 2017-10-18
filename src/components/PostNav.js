import React, {Component} from 'react';

class PostNav extends Component {
    // If user is logged in, show feed and favorites button
    // else only show new posts
    render(){
        if(this.props.user){
            return (
                <ul className="post-nav">
                    <li onClick={(feed)=>this.props.changeFeed("New Posts")}>New Posts</li>
                    <li onClick={(feed)=>this.props.changeFeed("Feed")}>Feed</li>
                </ul>
            );
        }
        return (
            <ul className="post-nav">
                <li onClick={(feed)=>this.props.changeFeed("New Posts")}>New Posts</li>
            </ul>
        );
    }
}

export default PostNav;