import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as pageA from './../store/pages/pageA/reducer';

export default createStore(
    combineReducers(Object.assign({}, 
        pageA
    )),
    applyMiddleware(thunk)
);