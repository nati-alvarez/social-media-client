import React, {Component} from 'react'
import {connect} from 'react-redux';

import Nav from './Nav';
import PostFeed from './PostFeed';
import Following from './Following';

import {logout} from '../actions/authActions.js';

import '../css/home.css'

class Home extends Component {
    constructor(){
        super();
        this.logout = this.logout.bind(this);
    }
    logout(){
        this.props.dispatch(logout());
    }
    render(){
        return(
            <div>
                <Nav user={this.props.user} logout={this.logout}/>
                <main>
                    <section>
                        <PostFeed user={this.props.user}/>
                    </section>
                    <aside>
                        <h4>Following</h4>
                        <Following user={this.props.user}/>
                    </aside>
                </main>
            </div>
        );
    }
}

function mapStateToProps(store){
    return {
        user: store.auth.user,
    }
}

export default connect(mapStateToProps)(Home);