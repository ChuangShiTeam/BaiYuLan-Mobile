import {Navigation} from 'react-native-navigation';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import Index from './view/index/Index';
import PurchaseIndex from './view/purchase/Index';
import AgentIndex from './view/agent/Index';
import ManagerIndex from './view/manager/Index';

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
    Navigation.registerComponent('/purchase', () => PurchaseIndex, store, Provider);
    Navigation.registerComponent('/agent', () => AgentIndex, store, Provider);
    Navigation.registerComponent('/manager', () => ManagerIndex, store, Provider);
}