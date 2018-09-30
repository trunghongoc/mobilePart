import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from '../components/menus/header/Main';
import WatchAndroidBackButtonPress from './../components/watches/WatchAndroidBackButtonPress';
// import GlobalContext from "./../contexts/GlobalContext";

export default withHeaderMenu = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return (
                <View style={styles.wrap}>
                    <WatchAndroidBackButtonPress/>
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
        zIndex: 0
    },
    container: {
      flex: 1,
      paddingHorizontal: 10
    }
});