import React, {Component} from 'react';

import Post from './Post';

class ProfileFavorites extends Component {
    render(){
        return (
            <section className="user-favorites">
                <h3>{this.props.user.username}'s Favorites</h3>
                <Post posts={this.props.posts}/>
            </section>
        );
    }
}

export default ProfileFavorites;