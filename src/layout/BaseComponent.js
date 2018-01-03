import React from 'react';
class BaseComponent extends React.Component{
    static navigatorStyle = {
        navBarBackgroundColor: '#b02318',
        navBarTextColor: '#ffffff',
        navBarTextFontSize: 18,
        navBarButtonColor: '#ffffff',
        navBarTextFontFamily: 'PingFangSC-Medium',
        tabBarHidden: true
    };

    cardStack: {
        gesturesEnabled: false  // 是否可以右滑返回
    }
}

export default BaseComponent;