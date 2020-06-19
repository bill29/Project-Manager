import React, { Component } from "react";
import Header from "../components/header";
import MovieItemComponent from "../components/MovieItemComponent";
import Footer from "../components/Footer";
import Axios from "axios";

class FavoriteMovieListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [
      ],
      user: {},
      loggedInStatus: "LOGGED_IN"
    };
    console.log("Constructor:" , this.props.loggedInStatus)
    this.showListMovieLiked = this.showListMovieLiked.bind(this);
  }
  
  componentWillMount() {
    var list = []
    Axios.get("http://localhost:5000/api/logged_in")
    .then(response => {
      this.setState({ loggedInStatus: response.data.status })
      this.setState({ user: response.data.user })
      if (this.state.loggedInStatus === "LOGGED_IN") {
        Axios.get(`http://localhost:5000/api/favorites/${response.data.user.id}`)
          .then(response => {
            if (response.data.status === "success") {
              list = response.data.list
              this.setState({
                listMovies: list,
              });
            }
          })
          .catch(error => {
            list = []
            throw error
          })
      } else {
        list = JSON.parse(localStorage.getItem("list"))
        this.setState({
          listMovies: list,
        });
      }
    })
    .catch(err => {
      throw err;
    });
   
  }

  onChangeStatus = (id) => {
    console.log("movie id:" + id);
    this.state.listMovies.map((item, index) => {
      if (index === id) {
        item.isLiked = !item.isLiked;
        console.log("status: " + item.isLiked);
        this.state.listMovies[id] = item;
        this.setState({
          listMovies: this.state.listMovies,
        });
        localStorage.setItem("list", JSON.stringify(this.state.listMovies));
      }
    });
  };


  showListMovieLiked(listMovies) {
    return (
      <div>
        {listMovies != null
          ? listMovies.map((movie, index) => {
            if (movie.isLiked)
              return (
                <MovieItemComponent
                  key={index}
                  id={index}
                  name={movie.name}
                  description={movie.description}
                  rateScore={movie.rateScore}
                  actors={movie.actors}
                  releaseDate={movie.releaseDate}
                  imageUrl={movie.imageUrl}
                  isLiked={movie.isLiked}
                  onUpdateStatus={this.onChangeStatus}
                  onChange={this.onChangeStatus}
                />
              );
          })
          : ""}
      </div>
    );
  }
  render() {
    console.log("Hello",this.state.props)
    return (
      <div>
        <Header state={this.props.loggedInStatus} />
        <div>
        {this.props.match.params.likedMovie === "likedMovie"
            ? this.showListMovieLiked(this.state.listMovies)
            : null}
        </div>
        <Footer />
      </div>
    );
  }
}

export default FavoriteMovieListPage;
