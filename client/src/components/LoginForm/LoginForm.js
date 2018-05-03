import React, { Component } from "react";
import "./LoginForm.css";
import API from "../../utils/API";

class LoginForm extends Component {
    state = {
        redirect: false,
        email: "",
        password: ""
    };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    loginForm = event => {
        event.preventDefault();

        API.userLogin({
            loginEmail: this.state.email,
            loginPassword: this.state.password
        }).then(res => 
        this.setState({redirect:true}));
    }

    handleSearch = event => {
        event.preventDefault();
        window.location.assign('/home')
    }


    render() {
        return (
            <div className="login-div">
                <form  onSubmit={this.loginForm}>
                    <div className="email-login">
                        <label for="email-form" className="email-label">Email</label><br/>
                        <input id="email-form form-box" type="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>

                    <br/>

                    <div className="password-login">
                        <label for="password-form" className="password-label">Password</label><br/>
                        <input id="password-form form-box" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>

                    <br/><br/>
                
                    <button onClick={this.handleSearch} className="login-submit">Submit</button>
                </form>
                <div className="register-div">
                    <p className="register-text">Not a member? &nbsp;</p><a className="register-link" href="/signup"> Register</a>
                </div>
            </div>
        )
    }
};

export default LoginForm;