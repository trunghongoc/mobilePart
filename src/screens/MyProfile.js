import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import withHeaderMenu from './LayoutWithHeader';
import Ahi from './Ahi';

class MyProfile extends React.Component {
    render() {
        return(
            <View>
                <Text>My profile</Text>
                <Ahi/>
            </View>
        );
    }
}

export default withHeaderMenu(MyProfile);