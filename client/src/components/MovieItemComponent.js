import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class MovieItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      rateScore: 0,
      actors: [],
      releaseDate: "",
      imageUrl: "",
      isLiked: false,
    };
  }

  handleChangeLiked = (event) => {
    this.props.onUpdateStatus(this.props.id);
  };

  showRatting = (ratting) => {
    var result = [];
    for (var i = 1; i <= ratting; i++) {
      result.push(<li key={i} className="fa fa-star"></li>);
    }
    for (var j = 1; j <= 5 - ratting; j++) {
      result.push(<li key={j + i} className="fa fa-star-o"></li>);
    }
    return result;
  };
  render() {
    var { name, description, rateScore, releaseDate, imageUrl } = this.props;
    return (
      // <div className="row mb-2 mt-4"></div>
      <Router>
        <div className="col-md-6">
          <div className="mb-2 mt-2">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250">
              <div className="card-body d-flex flex-column align-items-start text-left">
                <h3 className="name">{name}</h3>
                <div className="mb-1 text-muted">{releaseDate}</div>
                <p className="card-text mb-auto">{description}</p>
                <div className="rating-start inline">
                  <strong>Rate Score:</strong>
                  <ul>{this.showRatting(rateScore)}</ul>
                </div>
                <a href={"/movie/" + this.props.id}>Continue reading...</a>
                <div className="movie-like">
                  <button
                    className={
                      this.props.isLiked == true
                        ? "btn btn-danger"
                        : "btn btn-link"
                    }
                    onClick={this.handleChangeLiked}
                  >
                    <i className="fa fa-heart-o"></i>
                  </button>
                </div>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                src={imageUrl}
                alt="Card image"
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MovieItemComponent;
