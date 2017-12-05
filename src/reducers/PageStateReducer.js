import { IS_FETCHING } from '../actions/fetchActions/Fetch';

const initialState = {
    isFetching: {}
};

const pageStateReducer  = (state = initialState, action = {}) => {
    switch (action.type) {
        case IS_FETCHING:
            return state;
        default:
            return state;
    }
};

export default pageStateReducer;