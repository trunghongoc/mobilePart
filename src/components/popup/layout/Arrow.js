import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Config from './../../../configs/Config';

export default class Arrow extends React.Component {
    render() {
        const { arrowPos, direction } = this.props;
        return (
            <View style={[styles.boxConfirmArrow, arrowPos]}>
                <View style={styles.boxConfirmArrowChild}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxConfirmArrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.grayM,
        position: 'absolute',
        zIndex: 100
    },
    boxConfirmArrowChild: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Config.white,
        position: 'absolute',
        top: 0.5,
        left: -10
    },
});