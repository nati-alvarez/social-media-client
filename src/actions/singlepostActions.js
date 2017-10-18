import axios from 'axios';

export function getPost(id){
    return function(dispatch){
        axios.get(
            "https://complainr-api.now.sh/api/posts/" + id,
            {withCredentials: true}
        ).then(res=>{
            dispatch({type: "GET_POST_SUCCESS", payload: res.data.post});
        }).catch(err=>{
            dispatch({type: "GET_POST_ERR", payload: err});
        });
    }
}

export function createComment(postid, commentbody){
    return function(dispatch){
      axios.post(
        "https://complainr-api.now.sh/api/posts/" + postid,
        {commentbody},
        {withCredentials: true}
      ).then(res=>{
        dispatch({type: "CREATE_COMMENT_SUCCESS", payload: res.data.comment});
      }).catch(err=>{
        dispatch({type: "CREATE_COMMENT_ERR", payload: err});
      });
    }
}
