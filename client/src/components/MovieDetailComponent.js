import React, { Component } from "react";
import BoxCommentComponent from "./BoxCommentComponent";
import ListCommentComponent from "./ListCommentComponent";
import axios from "axios";

class MovieDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [
        // {
        //   "name": "Joker",
        //   "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg",
        //   "isLiked": false
        // },
        // {
        //   "name": "Ký Sinh Trùng",
        //   "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "1917",
        //   "description": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "The Last Dance\n",
        //   "description": "Charting the rise of the 1990s Chicago Bulls, led by Michael Jordan, one of the most notable dynasties in sports history",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BY2U1ZTU4OWItNGU2MC00MTg1LTk4NzUtYTk3ODhjYjI0MzlmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Breaking Bad",
        //   "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.\n",
        //   "rateScore": 10,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Nhà tù Shawshank\n",
        //   "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Inception\n",
        //   "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "uncut gems\n",
        //   "description": "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "once upon a time in hollywood\n",
        //   "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Interstellar",
        //   "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Dark\n",
        //   "description": "A family saga with a supernatural twist set in a German town where the disappearance of two young children exposes the relationships among four families",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjFlZjljNDctODIyZi00ZmZkLWE4OWYtMDkxMTZkNmM2OGMyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY142_CR3%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Paatal Lok\n",
        //   "description": "A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTE5NWUyMmYtMWE1My00ZDhiLWExZjEtMGJjYTA0OGYwZjIwXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "dark night\n",
        //   "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "gentelemen",
        //   "description": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "casablanca",
        //   "description": "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Jojo Rabbit\n",
        //   "description": "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.\n",
        //   "rateScore": 8,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "God father",
        //   "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY142_CR2%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Forrest Gump",
        //   "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY142_CR1%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // },
        // {
        //   "name": "Chernobyl",
        //   "description": "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.\n",
        //   "rateScore": 9,
        //   "imageUrl": "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX96_CR0%2C0%2C96%2C142_AL_.jpg\n",
        //   "isLiked": false
        // }
      ],
      user:{},
      loggedInStatus: "LOGGED_OUT",
      listComments: [],
    };
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
  }
  handleAddToDo = (item) => {
    this.state.listComments.push(item);
    this.setState({ listComments: this.state.listComments });
  };
  handleDeleteToDo = (index) => {
    this.state.listComments.splice(index, 1);
    this.setState({ listComments: this.state.listComments });
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

  render() {
    return (
      <div className="container">
        {this.state.listMovies.map((movie, index) => {
          if (index == this.props.match.params.id)
          {
            console.log("ID:", this.props.match.params.id)

            return (
              <div className="row">
                <div class="col-md-8">
                  <img class="img-fluid" src={movie.imageUrl} alt="" />
                </div>
                <div class="col-md-4">
                  <h3 class="my-3">{movie.name}</h3>
                  <p>{movie.description}</p>
                  <h3 class="my-3">Stars</h3>
                  {/* <ul>
                    {movie.actors.map((actor, index) => {
                      return <li key="index">{actor}</li>;
                    })}
                  </ul> */}
                  <strong>Rate: {movie.rateScore}</strong>
                  <p class="font-italic">Release Date: {movie.releaseDate}</p>
                </div>
              </div>
            );
          }
        })}
        <BoxCommentComponent onAddToDo={this.handleAddToDo} />
        <div>
          {this.state.listComments.map((item, index) => {
            return (
              <ListCommentComponent
                key={index}
                comment={item.comment}
                onToDoDelete={() => this.handleDeleteToDo(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default MovieDetailComponent;
