import React, { Component } from "react";
import MovieItemComponent from "./MovieItemComponent";
import axios from "axios";

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
class MoviesListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [
        //  {
        //         "name": "Joker",
        //         "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Ký Sinh Trùng",
        //         "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.\n",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "1917",
        //         "description": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.\n",
        //         "rateScore": 8,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "The Last Dance\n",
        //         "description": "Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Breaking Bad",
        //         "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.\n",
        //         "rateScore": 10,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Nhà tù Shawshank\n",
        //         "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Inception\n",
        //         "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.\n",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "uncut gems\n",
        //         "description": "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.\n",
        //         "rateScore": 8,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "once upon a time in hollywood\n",
        //         "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.\n",
        //         "rateScore": 8,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Interstellar",
        //         "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.\n",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },
        //       {
        //         "name": "Dark\n",
        //         "description": "A family saga with a supernatural twist set in a German town where the disappearance of two young children exposes the relationships among four families",
        //         "rateScore": 9,
        //         "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjFlZjljNDctODIyZi00ZmZkLWE4OWYtMDkxMTZkNmM2OGMyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n",
        //         "isLiked": false
        //       },

      ],
      listMoviesLiked: [],
      term: "",
      user: {},
      loggedInStatus: "LOGGED_OUT"
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  onChangeStatus = (id) => {
    console.log("movie id:" + id);
    this.state.listMovies.map((item, index) => {
      if (index === id) {
        item.isLiked = !item.isLiked;
        console.log("status: " + item.isLiked);
        if (item.isLiked){
          axios.get(`http://localhost:5000/api/update/like/${this.state.user.id}/${id+1}`)
        }else{
          axios.get(`http://localhost:5000/api/update/dislike/${this.state.user.id}/${id+1}`)
        }
        this.state.listMovies[id] = item;
        this.setState({
          listMovies: this.state.listMovies,
        });
        localStorage.setItem("list", JSON.stringify(this.state.listMovies));
      }
    });
  };

  componentWillMount() {
    axios.get("http://localhost:5000/api/logged_in")
    .then(response => {
      this.setState({ loggedInStatus: response.data.status})
      this.setState({ user:  response.data.user})
      if (response.data.status == "LOGGED_OUT"){
        axios.get("http://localhost:5000/api/movies/all")
        .then(res => {
          if (res.data.status === "success") {
            this.setState({ listMovies: res.data.list })
            localStorage.setItem("list", JSON.stringify(res.data.list))
          }
        })    
      }else{
        axios.get(`http://localhost:5000/api/movies/all/${response.data.user.id}`)
        .then(res => {
          if (res.data.status === "success") {
            this.setState({ listMovies: res.data.list })
            localStorage.setItem("list", JSON.stringify(res.data.list))
          }
        })    
      }
    })
    .catch(err => {
      throw err;
    });    
  }

  componentDidCatch() {
    let list = JSON.parse(localStorage.getItem("list"));
    this.setState({
      listMovies: list,
    });
  }

  render() {
    return (
      <div>
        <div className="row col-xs-6 col-sm-6 col-md-6 col-lg-6 mb-2">
          <div className="input-group">
            <input
              name="keyword"
              type="text"
              className="form-control mb-3"
              placeholder="Nhập từ khóa..."
              onChange={this.searchHandler}
            />
          </div>
        </div>
        <div className="row">
          {this.props.statusLiked === true
            ? this.state.listMovies.map((movie, index) => {
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
            : this.state.listMovies
              .filter(searchingFor(this.state.term))
              .map((movie, index) => {
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
              })}
        </div>
      </div>
    );
  }
}

export default MoviesListComponent;
