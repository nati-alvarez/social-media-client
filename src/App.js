import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import AuthForms from './components/AuthForms';
import NewPost from './components/NewPost';
import SinglePost from './components/SinglePost';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';


import './css/base.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/auth" component={AuthForms}/>
            <Route path="/posts/new" component={NewPost}/>
            <Route path="/posts/:id" component={SinglePost}/>
            <Route exact path="/users/:username" component={Profile}/>
            <Route path="/users/:username/edit" component={EditProfile}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
