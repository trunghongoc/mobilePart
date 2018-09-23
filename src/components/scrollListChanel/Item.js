import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Config from './../../configs/Config';

export default class Item extends React.Component {
    render() {
        const { text } = this.props;
        const compactText = text.length > 11 ? text.substr(0, 11).trim() : text;
        return (
        <View style={styles.box}>
            <TouchableOpacity>
                <View style={styles.boxContent}>
                    <View style={styles.boxImg}></View>
                    <View style={styles.wrapText}>
                        <Text style={styles.boxText}>{compactText}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        width: 86,
        height: 84,
    },
    boxContent: {
        width: 82,
        height: 84,
    },
    boxImg: {
        width: 66,
        height: 66,
        borderRadius: 65,
        backgroundColor: Config.gray,
        marginLeft: 8
    },
    boxText: {
        color: '#000'
    },
    wrapText: {
        flex: 1,
        alignItems: 'center'
    }
});