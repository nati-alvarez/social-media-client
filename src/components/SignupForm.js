import React, {Component} from 'react';

class SignupForm extends Component {
    getInput(e){
        e.preventDefault();
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var confirm = document.getElementById("confirm").value;
        var password = document.getElementById("password").value;

        this.props.signup(username, email, password, confirm);
    }
    render(){
        return(
            <form onSubmit={(e)=> this.getInput(e)}>
                <h2>Sign Up</h2>
                <input id="username" type="text" placeholder="Username"/>
                <input id="email" type="email" placeholder="Email"/>
                <input id="password" type="password" placeholder="Password"/>
                <input id="confirm" type="password" placeholder="Confirm Password"/>
                <button>Sign Up</button>
                <a onClick={this.props.changeForm}>Login</a>
            </form>
        );
    }
}

export default SignupForm;