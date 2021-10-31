import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reposReducer from './reposReducers';
import usersReducer from './userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { useStore } from 'react-redux';

const rootReducer = combineReducers( {
    repos: reposReducer,
    users : usersReducer, 

}
)

export const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));