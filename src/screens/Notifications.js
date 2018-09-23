import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import withHeaderMenu from './LayoutWithHeader';

class Notifications extends React.Component {
    render() {
        return(
            <View>
                <Text>Notifications</Text>
            </View>
        );
    }
}

export default withHeaderMenu(Notifications);