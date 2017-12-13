import update from 'immutability-helper'


const initialState = {
    Movie: {}
};

export const getMovieItem = state => ({
      movieItem: state.MovieItem.Movie,
      isFetching: state.PageState.isFetching,
  }
);

const movieItemReducer  = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'MOVIE_ITEM_LOADED':
            return update(state, { Movie: { $set: action.result } });
        default:
            return state;
    }
};


export default movieItemReducer;
