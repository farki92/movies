import update from 'immutability-helper';
import { IS_FETCHING } from '../actions/fetchActions/Fetch';

const initialState = {
    isFetching: false,
};

const pageStateReducer  = (state = initialState, action = {}) => {
    switch (action.type) {
        case IS_FETCHING:
            return update(state, { isFetching: { $set: action.value } });
        default:
            return state;
    }
};

export default pageStateReducer;