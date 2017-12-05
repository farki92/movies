const initialState = {
    movies: {
        comment: ''
    },
};

const movieIndexReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
};

export default movieIndexReducer;
