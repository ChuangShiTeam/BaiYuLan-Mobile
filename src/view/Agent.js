import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

class Agent extends React.Component {

    componentWillMount() {
        // Navigation.showModal({
        //     screen: "example.PushedScreen", // unique ID registered with Navigation.registerScreen
        //     title: "Modal", // title of the screen as appears in the nav bar (optional)
        //     passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        //     navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        //     navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        //     animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
        // });

        // Navigation.startSingleScreenApp({
        //     screen: {
        //         screen: 'example.PushedScreen', // unique ID registered with Navigation.registerScreen
        //         title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        //         navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        //         navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        //     }
        // });
    }

    render() {
        return (
            <View>
                <Text>Agent</Text>
            </View>
        );
    }
}

export default Agent;