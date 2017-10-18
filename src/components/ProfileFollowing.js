import React, {Component} from 'react';

import Following from './Following';

class ProfileFavorites extends Component {
    render(){
        return (
            <section className="user-following">
                <h3>{this.props.user.username} Is Following</h3>
                <Following user={this.props.user}/>
            </section>
        );
    }
}

export default ProfileFavorites;