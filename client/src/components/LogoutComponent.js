import React, { Component } from "react";
import HomePage from "../pages/HomePage";
import Axios from "axios";


export default class LogoutComponent extends Component{
    componentWillMount(){
        Axios.get("http://localhost:5000/api/logout")
        .catch(err => {
            throw err
        })
    }
    render(){
        return(
        <div>
            <HomePage/>
        </div>
        );
    }
}