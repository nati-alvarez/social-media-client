import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import ProfileNav from './ProfileNav';
import ProfilePosts from './ProfilePosts';
import ProfileFavorites from './ProfileFavorites';
import ProfileFollowing from './ProfileFollowing';

import {getUser} from '../actions/userActions';
import {followUser} from '../actions/userActions';

import '../css/profile.css';

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            section: "Posts"
        }
        this.changeSection = this.changeSection.bind(this);
        this.followUser = this.followUser.bind(this);
    }
    componentWillMount(){
        if(!this.props.user){
            this.props.history.push("/");
        }
        var username = this.props.match.params.username;
        this.props.dispatch(getUser(username));
    }
    changeSection(section){
        this.setState({section});
    }
    followUser(username){
        this.props.dispatch(followUser(username));
    }
    render(){
        if(this.props.profile.user){

            //determines which section to use based on state bcuz idk how to do i w/ react router
            var section;
            if(this.state.section === "Posts"){
                section = <ProfilePosts user={this.props.profile.user} posts={this.props.profile.user.posts}/>
            }else if(this.state.section === "Favorites"){
                section = <ProfileFavorites user={this.props.profile.user} posts={this.props.profile.user.favorites}/>
            }else {
                section = <ProfileFollowing user={this.props.profile.user}/>
            }

            //determines to show either follow, following, or edit profile button
            var profileBtn = <button className="follow-btn" onClick={username=>{this.followUser(this.props.profile.user.username)}}>Follow</button>;
            if(this.props.user.username === this.props.profile.user.username){
                profileBtn = <a href={"/users/" + this.props.profile.user.username + "/edit"}><button className="edit-profile-btn">Edit Profile</button></a>;
            }
            this.props.user.following.forEach(user=>{
                if(user._id === this.props.profile.user._id){
                    profileBtn = <button disabled className="follow-btn">Following</button>;
                }
            });

            return (
                <section className="user-profile">
                    <header className="profile-banner">
                        <img className="profile-pic" height="125" width="125" src={this.props.profile.user.image} />
                        <h3>{this.props.profile.user.username}</h3>
                        <p>{this.props.profile.user.bio || "No bio."}</p>
                        {profileBtn}
                    </header>
                    <section className="profile-info">
                        <ProfileNav changeSection={this.changeSection}/>
                        {section}
                    </section>
                </section>
            );
        }else {
            return(<p>User Not Found.</p>);
        }
    }
}

function mapStateToProps(store){
    return {
        user: store.auth.user,
        profile: store.profile
    }
}

export default connect(mapStateToProps)(Profile);
