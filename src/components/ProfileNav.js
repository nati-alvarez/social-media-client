import React, {Component} from 'react';


class ProfileNav extends Component {
    render(){
        return (
            <ul className="post-nav">
                <li onClick={section=>{this.props.changeSection("Posts")}}>Posts</li>
                <li onClick={section=>{this.props.changeSection("Favorites")}}>Favorites</li>
                <li onClick={section=>{this.props.changeSection("Following")}}>Following</li>
            </ul>
        );
    }
}

export default ProfileNav;