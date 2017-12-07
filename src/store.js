import { applyMiddleware, createStore, combineReducers } from 'redux';
import movieItemReducer from './reducers/MovieItemReducer';
import movieIndexReducer from './reducers/MovieIndexReducer';
import pageStateReducer from './reducers/PageStateReducer';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        MovieItem: movieItemReducer,
        MovieIndex: movieIndexReducer,
        PageState: pageStateReducer
    }),
    {},
    applyMiddleware(thunk)
);
