import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as pageA from './../store/pages/pageA/reducer';

const enhancers = process.env.NODE_ENV === 'development' 
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk);

export default createStore(
  combineReducers(Object.assign({}, 
    pageA
  )),
  enhancers
);