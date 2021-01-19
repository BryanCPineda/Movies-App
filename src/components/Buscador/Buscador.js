import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title) 
    this.setState ({title:''})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="divBuscador">
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="boton">Buscar</button>
        </form>
        <ul>
          {
            this.props.movies && this.props.movies.map((el,i)  => (
              <li style={{color:"white", marginLeft:"40px"}}>
              <div className="titulos" key ={i}> 
                  <div>
                  <NavLink className="NavLink" to={`/movie/${el.imdbID}`} >{el.Title.toUpperCase()}</NavLink>
                  </div>
                  <div className="botonesFav" >
                  <button className="favButton" onClick={() => this.props.addMovieFavorite({title: el.Title, id: el.imdbID})}>Add to Fav</button>
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
      movies: state.moviesLoaded
   };
}

function mapDispatchToProps (dispatch){
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }; 
}


export default connect( mapStateToProps, mapDispatchToProps)(Buscador);
