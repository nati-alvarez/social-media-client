import React, {Component} from 'react';
import {connect} from 'react-redux';

import PostNav from './PostNav';
import Post from './Post';

import {getNewPosts, getFeed} from '../actions/postActions';

class PostFeed extends Component {
    constructor(){
        super();
        this.state = {
            feed: "New Posts"
        }
        this.changeFeed = this.changeFeed.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(getNewPosts());
    }
    getPosts(filter){
        switch(filter){
            case "Feed":
                this.props.dispatch(getFeed());
                break;
            case "New Posts":
                this.props.dispatch(getNewPosts());
        }  
    }
    changeFeed(feed){
        this.setState({feed});
        this.getPosts(feed);
    }
    render(){
        return (
            <div>
                <PostNav user={this.props.user} changeFeed={this.changeFeed}/>
                <h4>{this.state.feed}</h4>
                <Post posts={this.props.posts}/>
            </div>
        );
    }
}


function mapStateToProps(store){
    return {
        posts: store.posts.posts
    }
}

export default connect(mapStateToProps)(PostFeed);