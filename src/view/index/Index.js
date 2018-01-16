import React, {Component} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import classNames from 'classnames';

import myStyle from "./Index.css";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isRefresh: false
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleRefresh() {
        this.setState({
            isRefresh: true
        });

        setTimeout(() => {
            this.setState({
                isRefresh: false
            });
        }, 2000);
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefresh}
                        onRefresh={this.handleRefresh.bind(this)}
                        title='下拉刷新'
                    />
                }>

                <View style={myStyle.container}>
                    <View style={myStyle.left}></View>
                    <View style={myStyle.center}></View>
                    <View style={myStyle.right}></View>
                </View>
            </ScrollView>
        );
    }
}

export default Index;