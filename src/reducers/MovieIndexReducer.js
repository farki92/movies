const initialState = {
    movies: {},
};

const movieIndexReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SEARCH_LOADED':
            return state;
        default:
            return state;
    }
};

export default movieIndexReducer;
