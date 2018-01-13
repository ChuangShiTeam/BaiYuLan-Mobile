import React, {Component} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';

import styles from "./Index.css";

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

                <View style={styles.container}>
                    <View style={styles.left}></View>
                    <View style={{
                        flexGrow: 1,
                        height: 100,
                        backgroundColor: '#987980'
                    }}></View>
                    <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#994477'
                    }}></View>
                </View>
            </ScrollView>
        );
    }
}

export default Index;