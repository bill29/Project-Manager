import { BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailComponent from "./components/MovieDetailComponent";
import FavoriteMovieListPage from "./pages/FavoriteMovieListPage";
import LoginComponent from "./components/LoginComponent"
import React, { Component } from "react";
import Recommended from "./components/RecommendComponent"
import LogOutCOmponent from "./components/LogoutComponent"
import Axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "LOGGED_IN",
      user: {},
      noti: "Log in or create an account!"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfullLogout = this.handleSuccessfullLogout(this);
  }

  componentWillMount(){
      Axios.get("http://localhost:5000/api/logged_in")
        .then(response => {
          this.setState({ loggedInStatus: response.data.status })
          this.setState({ user: response.data.user })
          if (response.data.status === "LOGGED_IN")
            this.setState({noti: `Welcome, ${response.data.user.username}`})
          else
            this.setState({noti: "Log in or create an user account!"})
        })
        .catch(err => {
          throw err;
        });
    }
  
  getInitState(){
    var status = localStorage.getItem('Status')
    var user = localStorage.getItem('User')
    return {loggedInStatus: status, user: user}
  }

  handleSuccessfullLogout(){
    localStorage.setItem('Status', "LOGGED_OUT")
    localStorage.setItem('User', {})
    this.setState({loggedInStatus: "LOGGED_OUT", user: {}})
    this.setState({noti: "Create an user or login!"})
  }

  handleSuccessfulLogin(data){
    localStorage.setItem('Status', data.loggedInStatus)
    localStorage.setItem('User', data.user)
    this.setState({loggedInStatus: data.loggedInStatus, user: data.user})
    this.setState({noti: `Welcome, ${data.user.username}`})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        {/* <h3>STATUS: {this.state.loggedInStatus}</h3> */}
        <h5>{this.state.noti}</h5>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={(props) => <HomePage {...props} loggedInStatus={this.state.loggedInStatus}/>}></Route>
            <Route
              path="/:likedMovie"
              exact
              render={(props) => <FavoriteMovieListPage {...props} loggedInStatus={this.state.loggedInStatus}/>}
            ></Route>
            <Route
              path="/movie/:id"
              exact
              render={(props) => <MovieDetailComponent {...props}/>}
            ></Route>
            <Route
              path={"/login/form"}
              exact
              render={(props) =><LoginComponent {...props} handleSuccessfulLogin={this.handleSuccessfulLogin} />}
            ></Route>
            <Route
              path={"/logout/form"}
              exact
            render={(props) =><LogOutCOmponent {...props} handleSuccessfullLogout={this.handleSuccessfullLogout} />}              
            ></Route>
            <Route
              path={"/recommend/movies"}
              exact
              render={(props) => <Recommended {...props}/>}
            ></Route>
          </Switch>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}
