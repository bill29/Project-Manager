import React, { Component } from "react";

import MoviesListComponent from "../components/MoviesListComponent";
import Footer from "../components/Footer";
import Header from "../components/header"

class HomePage extends Component {
  constructor(props) {
    super();
    this.state = {
      loggedInStatus: null, 
      user: {}
    }
  }
  componentWillMount(){
    var status = localStorage.getItem("Status")
    if (status != null){
      this.setState({loggedInStatus: status})
    }
  }

  render() {
    return (
      <div>
        <Header loggedInStatus={this.props.loggedInStatus}></Header>
        <MoviesListComponent />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
   