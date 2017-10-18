import React, {Component} from 'react';

class LoginForm extends Component {
    getInput(e){
        e.preventDefault()
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        this.props.login(username, password);
    }
    render(){
        return(
            <form onSubmit={(e)=>this.getInput(e)}>
                <h2>Login</h2>
                <input id="username" type="text" placeholder="Username"/>
                <input id="password" type="password" placeholder="Password"/>
                <button>Login</button>
                <a onClick={this.props.changeForm}>Register</a>
            </form>
        );
    }
}

export default LoginForm;