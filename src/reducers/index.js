const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
};

function rootReducer (state = initialState, action){

    if(action.type === 'ADD_MOVIE_FAVORITE'){
        let movieId = action.payload.id;
        let result = state.movies.find(mov => mov.id === movieId)
        if(result) alert('Esta pelicula ya fue agregada')
        else return{
            ...state,
            movies: state.movies.concat(action.payload)
        };
    }
    
    if(action.type === 'GET_MOVIES'){
        return{
            ...state,
            moviesLoaded: action.payload.Search
        };
    }

    if(action.type === 'REMOVE_MOVIE_FAVORITE'){
        return{
            ...state,
            movies: state.movies.filter(i => i.title !== action.payload.title)//filtrar por ID es mejor
        };
    }

    if(action.type === 'GET_MOVIE_DETAIL'){
        return{
            ...state,
            movieDetail: action.payload
        };
    }
    return state; 

}    

export default rootReducer; 