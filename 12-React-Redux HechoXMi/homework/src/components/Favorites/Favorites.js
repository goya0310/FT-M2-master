import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favorites.map(movie =>
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button onClick={() => this.props.remove(movie.id)
              }> X
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.moviesFavourites,
})

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeMovieFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);