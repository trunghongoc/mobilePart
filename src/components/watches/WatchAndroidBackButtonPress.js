import React, { Component } from 'react';
import { BackHandler, View } from 'react-native';
import { withNavigation } from 'react-navigation';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actGetHistory, actSetHistory, actRemoveLastHistory } from './../../reducers/navigationReducer';

function mapStateToProps(state: Object): Object {
    return {
        navigationReducer: state.navigationReducer,
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    // actGetHistory: bindActionCreators(actGetHistory, dispatch),
    // actSetHistory: bindActionCreators(actSetHistory, dispatch),
    actRemoveLastHistory: bindActionCreators(actRemoveLastHistory, dispatch),
  }
}

class WatchAndroidBackButtonPress extends Component {
    handleBackPress = () => {
        //this.props.navigation.navigate(this.props.navigationReducer.prevScreen);
        
        let navHistory = this.props.navigationReducer.history;
        if (typeof(navHistory[navHistory.length - 2]) !== 'undefined') {
            let prevRoute = navHistory[navHistory.length - 2];
            this.props.actRemoveLastHistory();
            this.props.navigation.navigate(prevRoute);
        } else {
            this.props.actRemoveLastHistory();
            this.props.navigation.navigate(this.props.navigationReducer.prevScreen);
        }
        // return false (default)
        return true;
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        // console.log('------------------did mount handle press back button')
    }

    render = () => null;
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(WatchAndroidBackButtonPress));