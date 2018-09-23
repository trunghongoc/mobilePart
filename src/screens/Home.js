import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import withHeaderMenu from './LayoutWithHeader';
import Segement from './../components/Segment';
import { Main as ScrollListChanel } from './../components/scrollListChanel/Main';

class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Segement/>
                <ScrollListChanel title="Danh sách bạn bè"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

export default withHeaderMenu(Home);