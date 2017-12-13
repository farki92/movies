import update from 'immutability-helper';
import { IS_FETCHING } from '../actions/fetchActions/Fetch';


const initialState = {
    isFetching: false,
    Error: {},
};

const pageStateReducer  = (state = initialState, action = {}) => {
    switch (action.type) {
        case IS_FETCHING:
            return update(state, { isFetching: { $set: action.value } });
        case 'HAS_ERROR':
            return update(state, { Error: { $set: action.result } });
        default:
            return state;
    }
};


export default pageStateReducer;
