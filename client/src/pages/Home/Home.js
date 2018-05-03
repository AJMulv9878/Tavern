import React, {Component} from "react";
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import { Glyphicon } from "react-bootstrap";

class Home extends Component {
    state = {
        server: "Donovon's Fun Room"
    };

    render() {
        return (
            <div className="home-div">
                <div className="sidebar-div">
                    <div className="user-div">
                        <img className="profilePic" src="/photos/ONO2.jpg" alt="Profile Pic"/>
                        <p className="profileName">&nbsp;&nbsp;&nbsp;Ximon</p>
                    </div>

                    <div className="dropdown">
                        <button onClick="#" className="dropbtn">{this.state.server}</button>
                    </div>    

                    <div className="chat-list">
                        <button className="forumbtn server-btn"><Glyphicon glyph="align-left" />Forum</button><br/><br/>
                        <button className="text-general server-btn">General</button><br/>
                        <button className="text-movies server-btn">Movies</button><br/>
                        <button className="text-memes server-btn">Memes</button><br/><br/>
                        <button className="voice-general server-btn">General</button><br/>
                        <button className="voice-general2 server-btn">General 2</button><br/>
                    </div>
                </div>

                <div className="main-div">
                    <div className="header-div">
                    </div>
                    <div className="messages-div">
                    </div>
                </div>
            </div>
            )
        }
}

export default Home;