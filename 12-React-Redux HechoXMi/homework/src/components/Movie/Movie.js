import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail ,setMovieDetail } from '../../actions/index';

import './Movie.css';


class Movie extends React.Component {
    // para ver como montar desde el estado local code review pt06 1:17hs

    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.setMovie({})
    }

    render() {
        return (
            <div>
                <h1>Detalle de la pelicula</h1>
                <div className='container'>
                    <div className='movie-card'>
                        <div className='details'>
                            <div className='title'>
                                {this.props.detail?.Title || ""}
                                <span>
                                    {this.props.detail.Rated}
                                </span>
                            </div>
                            <p>{this.props.detail?.Year || ""}</p>
                            <p className='description'>{this.props.detail?.Plot || ""}</p>
                            <div className='container2'>
                                <div className='img'>
                                    <img src={this.props.detail?.Poster} alt="Movie Poster" className='img'></img>
                                </div>
                                <div className='column'>
                                    <ul>
                                        <li>Director: {this.props.detail.Director}</li>
                                        <li>BoxOffice: {this.props.detail.BoxOffice}</li>
                                        <li>imdbRating: {this.props.detail.imdbRating}</li>
                                        <li>Genre: {this.props.detail.Genre}</li>
                                        <li>Awards: {this.props.detail.Awards}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.moviesLoaded,
    detail: state.movieDetail
})

const mapDispatchToProps = (dispatch) => ({
    setMovie: (movie) => dispatch(setMovieDetail(movie)),
    getMovie: (imdbID) => dispatch(getMovieDetail(imdbID)   )
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);