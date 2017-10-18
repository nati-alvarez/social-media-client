export default function reducer(state={
    user: null,
    err: null
}, action){
    switch(action.type){
        case "GET_USER_SUCCESS":
            return {...state, err: null, user: action.payload}
        case "GET_USER_ERR":
            return {...state, user: null, err: action.payload}
        default:
            return state;
    }
}