import React, {Component} from 'react';
import { Main as DrawerMenu } from './Main';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actGetHistory, actSetHistory } from './../../../reducers/navigationReducer';

function mapStateToProps(state: Object): Object {
    return {
        navigationReducer: state.navigationReducer,
    }
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actGetHistory: bindActionCreators(actGetHistory, dispatch),
    actSetHistory: bindActionCreators(actSetHistory, dispatch)
  }
}

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
}

class DrawerWithDetect extends Component {
    setNavigationHistory = (newHistory) => {
        this.props.actSetHistory(newHistory);
    } 

    render() {
        console.log('..........props:', this.props.navigationReducer.history);
        return (
            <DrawerMenu
                onNavigationStateChange={(prevState, currentState) => {
                    const currentScreen = getActiveRouteName(currentState);
                    const prevScreen = getActiveRouteName(prevState);
                    this.setNavigationHistory({ currentScreen, prevScreen });

                    if (prevScreen !== currentScreen) {
                        
                    }
                }}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerWithDetect);