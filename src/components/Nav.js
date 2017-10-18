import React, {Component} from 'react';

import {logout} from '../actions/authActions';

class Nav extends Component {
    render(){
        if(this.props.user){
            return(
                <nav>
                    <a href={"users/" + this.props.user.username}>{this.props.user.username}
                    <img className="profile-pic" width="45" height="45" src={this.props.user.image}/></a>
                    
                    <button onClick={this.props.logout} className="logout-btn">Logout</button>
                    <a href="/posts/new">
                        <button className="new-post-btn"><i className="fa fa-pencil-square-o"></i> New Post</button>
                    </a>
                </nav>
            );
        }

        return(
            <nav>
                <a href="/auth"><button className="logout-btn">Login</button></a>
            </nav>
        );
    }
}

export default Nav;
