import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="titulo">Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map((el,i) => (          
              <li className="itemfav">
              <div className="listafav">
                <div>
                <NavLink className="NavLink" to={`/movie/${el.id}`} >{el.title.toUpperCase()}</NavLink>
                </div>
                <div className="botonesFav" >
                <button className="deleteButton" onClick= {() => this.props.removeMovieFavorite({title: el.title, id: el.imdbID}) }> Delete</button>
                  </div>
              </div>
              </li>
              )
            )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
     movies: state.movies
  };
}

function mapDispatchToProps (dispatch){
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  }; 
}


export default connect( mapStateToProps, mapDispatchToProps)(ConnectedList);