import axios from 'axios';

export function login(username, password){
    return function(dispatch){
        dispatch({type: "LOGIN_START", payload: "loading..."});
        axios.post('https://complainr-api.now.sh/api/users/login',
        {username, password},
        {withCredentials: true}).then(res=>{
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        }).catch(err=>{
            dispatch({type: "LOGIN_ERR", payload: err});
        });
    }
}

export function logout(){
    return function(dispatch){
        dispatch({type: "LOGOUT"});
    }
}

export function signup(username, email, password){
    return function(dispatch){
        dispatch({type: "SIGNUP_START", payload: "...loading"});
        axios.post('https://complainr-api.now.sh/api/users',
        {username, password, email},
        {withCredentials: true}).then(res=>{
            dispatch({type: "SIGNUP_SUCCESS", payload: res.data});
        }).catch(err=>{
            dispatch({type: "SIGNUP_ERR", payload: err});
        });
    }
}

export function updateProfile(username, email, bio, image){
  return function(dispatch) {
    axios.put(
      "https://complainr-api.now.sh/api/users/" + username,
      {email, bio, image},
      {withCredentials: true}
    ).then(res=>{
      dispatch({type: "UPDATE_PROFILE_SUCCESS", payload: {user: res.data.updatedUser, message: res.data.message}});
    }).catch(err=>{
      dispatch({type: "UPDATE_PROFILE_ERR", payload: err});
    });
  }
}
