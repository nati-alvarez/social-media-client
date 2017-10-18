export default function reducer(state={
    posts: [],
    newPost: null, //for making new posts
    post: {}, //for viewing a single post
    err: null,
    status: null
}, action){
    switch(action.type){
        case "GET_POSTS_START":
            return {
                ...state,
                err: null,
                status: "loading..."
            }
        case "GET_POSTS_SUCCESS":
            return {
                ...state,
                err: null,
                status: null,
                posts: action.payload.posts
            }
        case "GET_POSTS_ERR":
            return {
                ...state,
                status: null,
                posts: null,
                err: action.payload
            }
        case "LIKE_POST_SUCCESS":
            return {
                ...state,
                post: {
                  ...state.post,
                  likes: state.post.likes + 1
                },
                posts: state.posts.map((post)=>{
                    if(post._id === action.payload.postid){
                        return {
                            ...post,
                            likes: post.likes + 1
                        }
                    }else {
                        return post
                    }
                })
            }
        case "DISLIKE_POST_SUCCESS":
            return {
                ...state,
                post: {
                  ...state.post,
                  dislikes: state.post.dislikes + 1
                },
                posts: state.posts.map((post)=>{
                    if(post._id === action.payload.postid){
                        return {
                            ...post,
                            dislikes: post.dislikes + 1
                        }
                    }else {
                        return post
                    }
                })
            }
        case "FAVORITE_POST_SUCCESS":
            return {
                ...state,
                post: {
                  ...state.post,
                  favorites: state.post.favorites + 1
                },
                posts: state.posts.map((post)=>{
                    if(post._id === action.payload.postid){
                        return {
                            ...post,
                            favorites: post.favorites + 1
                        }
                    }else {
                        return post
                    }
                })
            }
        case "NEW_POST_START":
            return {
                ...state,
                err: null,
                newPost: null,
                status: "loading..."
            }
        case "NEW_POST_SUCCESS":
            return {
                ...state,
                status: action.payload.message,
                newPost: action.payload.post
            }
        case "NEW_POST_ERR":
            return {
                ...state,
                status: null,
                newPost: null,
                err: action.payload
            }
        case "GET_POST_SUCCESS":
            return {
                ...state,
                err: null,
                post: action.payload
            }
        case "GET_POST_ERR":
            return {
                ...state,
                post: null,
                err: action.payload
            }
        case "CREATE_COMMENT_SUCCESS":
            return {
              ...state,
                post: {
                  ...state.post,
                  comments: state.post.comments.concat(action.payload)
                }
              }
        default:
            return state;
    }
}
