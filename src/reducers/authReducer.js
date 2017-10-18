export default function reducer(state={
    user: null || JSON.parse(window.localStorage.getItem('user')),
    err: null,
    status: null,
    message: null
}, action){
    switch(action.type){
        case "LOGIN_START":
            return {...state, err: null, message: null, status: "loading..."}
        case "LOGIN_SUCCESS":
            if(!action.payload.success){
                return {
                    ...state,
                    user: null,
                    status: null,
                    message: "Login Failed: ",
                    err: action.payload.message
                }
            }
            window.localStorage.setItem('user', JSON.stringify(action.payload.user));
            return{
                ...state,
                err: null,
                status: null,
                message: "Login Successful!",
                user: action.payload.user
            }
        case "LOGIN_ERR":
            var err = (action.payload.response)? action.payload.response.data.message: action.payload;
            return {
                ...state,
                user: null,
                status: null,
                message: "Login Failed: ",
                err
            }
        case "LOGOUT":
            window.localStorage.clear();
            return {...state, user: null}
        case "SIGNUP_START":
            return {...state, status: "loading...", message: null, err: null}
        case "SIGNUP_SUCCESS":
            if(!action.payload.success){
                return {
                    ...state,
                    user: null,
                    status: null,
                    message: "Signup Failed: ",
                    err: action.payload.message
                }
            }
            window.localStorage.setItem('user', JSON.stringify(action.payload.user));
            return{
                ...state,
                err: null,
                status: null,
                message: "Signup Successful!",
                user: action.payload.user
            }
        case "SIGNUP_ERR":
            var err = (action.payload.response)? action.payload.response.data.message: action.payload;
            return {...state, status: null, message: "Signup Failed: ", err}
        case "FOLLOW_USER_SUCCESS":
            var persistUser = JSON.parse(window.localStorage.getItem('user'));
            persistUser.following.push(action.payload);
            window.localStorage.setItem('user', JSON.stringify(persistUser));

            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.concat(action.payload)
                }
            }
        case "UPDATE_PROFILE_SUCCESS":
            window.localStorage.setItem('user', JSON.stringify(action.payload.user));
            return {
              ...state,
              message: action.payload.message,
              user: action.payload.user
            }
        case "UPDATE_PROFILE_ERR":
            return {
              ...state,
              message: null,
              err: action.payload
            }
        case "CHANGE_FORM":
            return {...state, status: null, message: null, err: null}
        default:
            return state;
    }
}
