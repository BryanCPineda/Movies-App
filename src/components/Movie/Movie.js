import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount (){

        const matchId = this.props.match.params.id; 
        this.props.getMovieDetail(matchId) 
    }    

    render() {
        return (
            <div>
                <h1 className="titulo">Detalle de la pelicula</h1>
                <h2 className="subtitulo"> {this.props.movie.Title} </h2>
                <img className="poster" src={this.props.movie.Poster} alt={`poster movie ${this.props.movie.Title}`}/> 
                <div className="movieinfo">
                <h3 className="year"> YEAR: {this.props.movie.Year} </h3>
                <h5>RELEASED : {this.props.movie.Released} </h5>
                <h5>TIME: {this.props.movie.Runtime} </h5>
                <h5>GENRE: {this.props.movie.Genre}  </h5>
                <h5>ACTORS: {this.props.movie.Actors} </h5>
                <p> {this.props.movie.Plot}</p>    
                </div>
            </div>
        
        );
    }
}

function mapStateToProps (state){
    return {
       movie: state.movieDetail
    };
  }
  
  function mapDispatchToProps (dispatch){
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }; 
  }
  
  
  export default connect( mapStateToProps, mapDispatchToProps)(Movie);
