import {Navigation} from 'react-native-navigation';

import {registerRouter} from './Router';

registerRouter();

Navigation.startTabBasedApp({
    tabs: [
        {
            label: '商城',
            screen: '/index',
            icon: require('./image/shop.png'),
            // selectedIcon: require('./screens/my_active.svg'),
            title: '积分商城'
        },
        {
            label: '进货',
            screen: '/purchase',
            icon: require('./image/goods_new.png'),
            // selectedIcon: require('./screens/index_active.svg'),
            title: '我要进货'
        },
        {
            label: '代理',
            screen: '/agent',
            icon: require('./image/friend.png'),
            title: '我的代理'
        },
        {
            label: '管理',
            screen: '/manager',
            icon: require('./image/settings.png'),
            // selectedIcon: require('./screens/my_active.svg'),
            title: '管理中心'
        }
    ],
    tabsStyle: {
        tabBarButtonColor: '#7F8389',
        tabBarSelectedButtonColor: '#CE3829',
    },
    appStyle: {

    }
});