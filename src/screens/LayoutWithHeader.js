import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/menus/header/Main';

export default withHeaderMenu = (WrappedComponent) => {
    class HOC extends React.Component {
      render() {
        return (
            <View style={styles.wrap}>
                <Header/>
                <View style={styles.container}>
                    <WrappedComponent {...this.props} />
                </View>
            </View>
        );
      }
    }
      
    return HOC;
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 10
    }
});