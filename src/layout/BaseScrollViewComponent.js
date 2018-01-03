import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, RefreshControl} from 'react-native';

class BaseScrollViewComponent extends Component {
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
                        title='下拉刷新'
                    />
                }>
            </ScrollView>
        );
    }
}

BaseScrollViewComponent.propTypes = {
    id: PropTypes.string.isRequired,
};

BaseScrollViewComponent.defaultProps = {};

export default BaseScrollViewComponent;