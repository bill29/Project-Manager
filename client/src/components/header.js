
import React, { Component } from "react";
import Axios from "axios"

export default class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            loggedInStatus: null,
            user: {}
        }
    }

    componentWillMount() {
        Axios.get("http://localhost:5000/api/logged_in")
        .then(response => {
          this.setState({ loggedInStatus: response.data.status })
          this.setState({ user: response.data.user })
          if (response.data.status == "LOGGED_IN"){
            this.setState({noti: `Welcome, ${response.data.user.username}`})
          }else{
            this.setState({noti: "Login or create an user account"})
          }
        })
        .catch(err => {
          throw err;
        });
    }

    render() {
        return (
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="text-muted" href={this.state.loggedInStatus === "LOGGED_IN" ? "/logout/form" : "/login/form"}>
                            {(this.state.loggedInStatus === "LOGGED_OUT" )? "LOG IN": 'LOG OUT'}
                        </a>
                    </div>
                </div>


                <div className="flex-nowrap justify-content-between align-items-center mt-3">
                    <nav className="navbar navbar-expand-md">
                        <div
                            className="row collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item btn btn-light">
                                    <a className="navbar-brand mb-0 h1" href="/">
                                        Movies List <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item btn btn-light">
                                    <a className="navbar-brand mb-0 h1" href="/likedMovie">
                                        Favorite Movie
                                </a>
                                </li>
                                <li className="nav-item btn btn-light">
                                    <a className="navbar-brand mb-0 h1" href="/recommend/movies">
                                        Recommended
                                </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
};
