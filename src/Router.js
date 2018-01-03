import {Navigation} from 'react-native-navigation';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import Index from './view/Index';
import Purchase from './view/Purchase';
import Agent from './view/Agent';
import Manager from './view/Manager';

import admin from "./store/admin";

const middleware = applyMiddleware(thunk);

const aaa = function (data) {
    const rootReducer = combineReducers({
        admin
    })

    return createStore(rootReducer, data, middleware)
}

const store = aaa();

export function registerRouter() {
    Navigation.registerComponent('/index', () => Index, store, Provider);
    Navigation.registerComponent('/purchase', () => Purchase, store, Provider);
    Navigation.registerComponent('/agent', () => Agent, store, Provider);
    Navigation.registerComponent('/manager', () => Manager, store, Provider);
}