import {Navigation} from 'react-native-navigation';

import Index from './view/Index';
import Purchase from './view/Purchase';
import Agent from './view/Agent';
import Manager from './view/Manager';

export function registerRouter() {
    Navigation.registerComponent('/index', () => Index);
    Navigation.registerComponent('/purchase', () => Purchase);
    Navigation.registerComponent('/agent', () => Agent);
    Navigation.registerComponent('/manager', () => Manager);
}