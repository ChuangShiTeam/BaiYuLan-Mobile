import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, RefreshControl, StyleSheet} from 'react-native';

class BaseScrollViewComponent extends React.Component {
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
                style={{
                    flex: 1
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefresh}
                        onRefresh={this.handleRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }>
            </ScrollView>
        );
    }
}

BaseScrollViewComponent.propTypes = {
    type: PropTypes.string
};

BaseScrollViewComponent.defaultProps = {

};

export default BaseScrollViewComponent;