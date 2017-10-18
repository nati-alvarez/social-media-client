import {combineReducers} from 'redux';

import auth from './authReducer';
import posts from './postReducer';
import profile from './userReducer';

export default combineReducers({
    auth,
    posts,
    profile,
});