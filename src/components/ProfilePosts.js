import React, {Component} from 'react';

import Post from './Post';

class ProfilePosts extends Component {
    render(){
        return (
            <section className="user-posts">
                <h3>{this.props.user.username}'s Posts</h3>
                <Post posts={this.props.posts}/>
            </section>
        );
    }
}

export default ProfilePosts;