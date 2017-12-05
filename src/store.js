import { applyMiddleware, createStore, combineReducers } from 'redux';
import movieItemReducer from './reducers/MovieItemReducer';
import movieIndexReducer from './reducers/MovieIndexReducer';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        movieItemReducer,
        movieIndexReducer
    }),
    {},
    applyMiddleware(thunk)
);
