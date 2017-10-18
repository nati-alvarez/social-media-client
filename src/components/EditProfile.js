import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUser} from '../actions/userActions';
import {updateProfile} from '../actions/authActions';

import '../css/editprofile.css';

class EditProfile extends Component {
  componentWillMount(){
    var username = this.props.match.params.username;
    if(username !== this.props.user.username){
      this.props.history.push('/');
    }
    this.props.dispatch(getUser(username));
  }
  updateProfile(e){
    e.preventDefault();
    var username = this.props.match.params.username;
    var email = document.getElementById('email').value;
    var bio = document.getElementById('bio').value;
    var image = document.getElementById('image').value;

    if (email && bio && image){
      this.props.dispatch(updateProfile(username, email, bio, image));
    }
  }
  render(){
    return (
      <div>
        <a className="home" href="/">Home</a>
        <form onSubmit={(e)=>this.updateProfile(e)} className="edit-profile">
          <h3>Edit Your Profile</h3>
          <label>Email:&nbsp;
            <input id="email" defaultValue={this.props.user.email}/>
          </label>
          <label>Bio:&nbsp;
            <textarea id="bio" defaultValue={this.props.user.bio}></textarea>
          </label>
          <label>Profile Pic (url):&nbsp;
            <input id="image" defaultValue={this.props.user.image}/>
          </label>
          <button className="edit-profile-btn">Edit Profile</button>
          <p className="err">{this.props.err}</p>
          <p className="success">{this.props.message}</p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    user: store.auth.user,
    message: store.auth.message,
    err: store.auth.err
  }
}

export default connect(mapStateToProps)(EditProfile);
