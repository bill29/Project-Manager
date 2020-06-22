import React, { Component } from "react";
import Header from "../components/header";
import MovieItemComponent from "../components/MovieItemComponent";
import Footer from "../components/Footer";
import axios from "axios";

class Recommended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovies: [
            ],
            user: {},
            loggedInStatus: null
        };
        this.showListMovieLiked = this.showListMovieLiked.bind(this);
    }

    componentWillMount() {
        axios.get("http://localhost:5000/api/recommend/1")
            .then(response => {
                this.setState({listMovies: response.data.list})    
            })
            .catch(error => {
                throw error;
            })
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
                        return (
                            <MovieItemComponent
                                key={index}
                                id={index}
                                name={movie.name}
                                description={movie.description}
                                rateScore={movie.rateScore}
                                actors={movie.actors}
                                // releaseDate={movie.releaseDate}
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
        console.log(this.state.listMovies)
        return (
            <div>
                <Header state={this.props.state} />
                <div>
                    {this.showListMovieLiked(this.state.listMovies)}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Recommended;
