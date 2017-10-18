import axios from 'axios';

export function getUser(username){
    return function(dispatch){
        axios.get(
            "https://complainr-api.now.sh/api/users/" + username,
            {withCredentials: true}
        ).then(res=>{
            dispatch({type: "GET_USER_SUCCESS", payload: res.data.user});
        }).catch(err=>{
            dispatch({type: "GET_USER_ERR", payload: err});
        });
    }
}

export function followUser(username){
    return function(dispatch){
        axios.post(
            'https://complainr-api.now.sh/api/users/' + username,
            {},
            {withCredentials: true}
        ).then(res=>{
            console.log(res.data);
            if(res.data.success === false){
                dispatch({type:"FOLLOW_USER_ERR", payload: res.data.message});
            }
            dispatch({type: "FOLLOW_USER_SUCCESS", payload: res.data.user});
        }).catch(err=>{
            dispatch({type: "FOLLOW_USER_ERR", payload: err});
        });
    }
}
