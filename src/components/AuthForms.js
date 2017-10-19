import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import {login as loginAction, signup as signupAction} from '../actions/authActions';

import '../css/form.css';

class AuthForm extends Component {
    constructor(){
        super();
        this.state = {
            form: "login",
        }
        this.changeForm = this.changeForm.bind(this);
        this.signup = this.signup.bind(this);
        this.login = this.login.bind(this);
    }
    componentWillMount(){
        if(this.props.auth.user){
            this.props.history.push("/");
        }
    }
    componentDidUpdate(){
        if(this.props.auth.user){
            this.props.history.push("/");
        }
    }
    signup(username, email, password, confirm){
       this.props.signup(username, email, password);
    }
    login(username, login) {
        this.props.login(username, login)
    }
    changeForm(){
        //resets state and toggles login/signup form
        if(this.state.form === 'login'){
            this.setState({form: 'signup'});
            this.props.changeForm();
            return;
        }
        this.setState({form: 'login'});
        this.props.changeForm();
    }
    render(){
        if(this.state.form === "login"){
            return(
                <div className="auth-form">
                    <LoginForm auth={this.props.auth} login={this.login} changeForm={this.changeForm}/>
                    <p>{this.props.auth.status}</p>
                    <p className="auth-err">{this.props.auth.message} {this.props.auth.err}</p>
                </div>
            );
        }else {
            return (
                <div className="auth-form">
                    <SignupForm auth={this.props.auth} signup={this.signup} changeForm={this.changeForm}/>
                    <p>{this.props.auth.status}</p>
                    <p className="auth-err">{this.props.auth.message} {this.props.auth.err}</p>
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch) {
    return({
        login: (username, password) => {
            if(username && password){
                dispatch(loginAction(username, password));
                return;
            }
            dispatch({type: "LOGIN_ERR", payload: "Username and Password Required."});
        },

        signup: (username, email, password, confirm) => {
            if (username && email && password && confirm){
                if (password === confirm){
                    dispatch(signupAction(username, email, password));
                    return;
                }
                dispatch({type: "SIGNUP_ERR", payload: "Passwords Do Not Match."});
                return;
            }
            dispatch({type: "SIGNUP_ERR", payload: "All Fields Required"});
        },

        changeForm: () =>{
            dispatch({type: "CHANGE_FORM"});
        }
    })
}

function mapStateToProps(store){
    return {
      auth: store.auth
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
