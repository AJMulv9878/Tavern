import React, {Component} from "react";
import "./Sidebar.css";
import API from "../../utils/API";

class Sidebar extends Component {
    state = {
        user: {},
        server: {}
    };

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = () => {
        API.getUser()
            .then(res =>
                this.setState({user: res.data}));

        console.log(this.state);
    };


    render() {
        return (
            <div className="sidebar-div">
                
            </div>
        )
    }
}