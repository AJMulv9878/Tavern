import React, { Component } from "react";
import "./SignupForm.css";
import API from "../../utils/API";

class SignupForm extends Component {
    state = {
        redirect: false,
        email: "",
        username: "",
        password: ""
    };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    signupForm = event => {
        event.preventDefault();

        API.userSignup({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then(res =>
        this.setState({redirect:true}));

    };

    render() {
        return (
            <div className="signup-div">
                <form  onSubmit={this.signupForm}>
                    <div className="email-signup">
                        <label for="email-form" className="email-label">Email</label><br/>
                        <input id="email-form" type="email" value={this.state.email} onChange={this.handleEmailChange}/>
                    </div>

                    <br/>

                    <div className="username-signup">
                        <label for="username-form" className="username-label">Username</label><br/>
                        <input id="username-form" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>

                    <br/>

                    <div className="password-signup">
                        <label for="password-form" className="password-label">Password</label><br/>
                        <input id="password-form" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>

                    <br/><br/>

                    <button className="signup-submit" onClick={this.signupForm}>Submit</button>
                </form>
                <div className="member-div">
                    <p className="member-text">Have an account? &nbsp;</p><a className="member-link" href="/">Login</a>
                </div>
            </div> 
        );
    }
}

export default SignupForm;