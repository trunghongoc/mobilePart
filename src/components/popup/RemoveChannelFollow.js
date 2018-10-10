import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import * as Config from './../../configs/Config';
import withPopoverLayout from './layout/Main';
import * as Icon from './../../icons/SimpleLine';

class RemoveChannelFollow extends React.Component {
    render() {
        return (
            <View style={styles.trashFlex}>
                <View style={styles.trashAround}>
                    <Icon.Trash color={Config.white} />
                </View>
                <Text style={styles.mrt5}>Kéo vào đây để loại bỏ khỏi danh sách!</Text>
            </View>
        );
    }
}

const fullWidth = Dimensions.get('window').width - 20;
const config = {
    size: {
        width: fullWidth,
        height: 90,
        force: true
    }
}
export default withPopoverLayout(RemoveChannelFollow, config);

const styles = StyleSheet.create({
    trashFlex: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    trashAround: {
        width: 37,
        height: 37,
        borderRadius: 37,
        backgroundColor: Config.primaryDanger,
        alignItems:'center',
        justifyContent: 'center',
    },
    mrt5: {
        marginTop: 5
    }
});

RemoveChannelFollow.defaultProps = {

};