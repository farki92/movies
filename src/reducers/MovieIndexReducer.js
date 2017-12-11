import update from 'immutability-helper';

const initialState = {
    Movies: [],
    TotalPages: 0,
};


export const getMovieList = state => ({
        Movies: state.MovieIndex.Movies,
        isFetching: state.PageState.isFetching,
        TotalPages: state.MovieIndex.TotalPages
});


const movieIndexReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SEARCH_LOADED':
        case 'INDEX_LOADED':
            return update(state, { Movies: { $set: action.result.Search }, TotalPages: { $set: Math.ceil(action.result.totalResults/10) } });
        default:
            return state;
    }
};


export default movieIndexReducer;
