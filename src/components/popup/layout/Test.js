import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import withPopoverLayout from './Main';

class Test extends React.Component {
    render() {
        return (
            <View style={styles.wrap}>
                <Text>Ahihi đồ ngốk</Text>
            </View>
        );
    }
}

export default withPopoverLayout(Test);

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        zIndex: 0,
    },
    container: {
      flex: 1,
      paddingHorizontal: 5
    }
});