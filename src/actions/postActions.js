import axios from 'axios';

export function getNewPosts(){
    return function(dispatch){
        dispatch({type: "GET_POSTS_START"});
        axios.get(
            'https://complainr-api.now.sh/api/posts',
            {withCredentials: true}
        ).then(res=>{
            dispatch({type: "GET_POSTS_SUCCESS", payload: res.data});
        }).catch(err=>{
            dispatch({type: "GET_POSTS_ERR", payload: err});
        });
    }
}

export function getFeed(){
    return function(dispatch){
        dispatch({type: "GET_POSTS_START"});
        axios.get(
            'https://complainr-api.now.sh/api/posts/feed',
            {withCredentials: true}
        ).then(res=>{
            dispatch({type: "GET_POSTS_SUCCESS", payload: res.data});
        }).catch(err=>{
            dispatch({type: "GET_POSTS_ERR", payload: err});
        });
    }
}

export function likePost(postid,){
    return function(dispatch){
        dispatch({type: "LIKE_POST_START"});
        axios.post(
            "https://complainr-api.now.sh/api/posts/" + postid + "/like",
            {},
            {withCredentials: true}
        ).then(res=>{
            //if success is false here, the user has already liked the post
            if(res.data.success){
                dispatch({type: "LIKE_POST_SUCCESS", payload: {postid}});
            }
        }).catch(err=>{
            dispatch({type: "LIKE_POST_ERR", payload: err});
        });
    }
}

export function dislikePost(postid,){
    return function(dispatch){
        dispatch({type: "DISLIKE_POST_START"});
        axios.post(
            "https://complainr-api.now.sh/api/posts/" + postid + "/dislike",
            {},
            {withCredentials: true}
        ).then(res=>{
            //if success is false here, the user has already disliked the post
            if(res.data.success){
                dispatch({type: "DISLIKE_POST_SUCCESS", payload: {postid}});
            }
        }).catch(err=>{
            dispatch({type: "DISLIKE_POST_ERR", payload: err});
        });
    }
}

export function favoritePost(postid,){
    return function(dispatch){
        dispatch({type: "FAVORITE_POST_START"});
        axios.post(
            "https://complainr-api.now.sh/api/posts/" + postid + "/favorite",
            {},
            {withCredentials: true}
        ).then(res=>{
            //if success is false here, the user has already favorited the post
            if(res.data.success){
                dispatch({type: "FAVORITE_POST_SUCCESS", payload: {postid}});
            }
        }).catch(err=>{
            dispatch({type: "FAVORITE_POST_ERR", payload: err});
        });
    }
}

export function makeNewPost(postbody){
    return function(dispatch){
        dispatch({type:"NEW_POST_START"});
        axios.post(
            "https://complainr-api.now.sh/api/posts/",
            {postbody},
            {withCredentials: true}
        ).then(res=>{
            dispatch({type: "NEW_POST_SUCCESS", payload: {post: res.data.post, message: res.data.message}});
        }).catch(err=>{
            dispatch({type: "NEW_POST_ERR", err});
        });
    }
}
