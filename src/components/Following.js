import React, {Component} from 'react';

import '../css/following.css';

class Following extends Component {
    render(){
        if(this.props.user){
            return(
                <div className="following">
                {this.props.user.following.map((user, key)=>{
                    return (
                        <div key={key} className="user">
                            <h5>
                                <img className="profile-pic" height="35" width="35" src={user.image}/>
                                {user.username}
                            </h5>
                            <div className="user-buttons">
                                <a href={"/users/" + user.username}>
                                    <button>View Profile</button>
                                </a>
                            </div>
                        </div>
                    );
                })}
                </div>
            );
        }

        return (
            <p>You aren't following anyone</p>
        );

    }
}

export default Following;
