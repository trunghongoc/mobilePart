import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import * as Icon from './../../../icons/SimpleLine';
import Item from './Item';

export default class Layout extends Component {
    navigateToScreen = ( route ) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        }
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <ImageBackground source={require('./../../../images/diamond_bg.jpg')} style={styles.bg}>
                        <View style={styles.imageAvatarWrap}>
                            <Image
                                source={require('./../../../images/man.png')}
                                style={styles.imageAvatar}
                            />
                        </View>
                        <View style={styles.fullName}>
                            <Text style={styles.pFullName}>Trung Hồ  Ngọc</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.screenContainer}>
                    <Item
                        pressEvent={this.navigateToScreen('Home')}
                        IconType={<Icon.Globe/>}
                        text="Trang chủ"/>
                    <Item
                        pressEvent={this.navigateToScreen('MyProfile')}
                        IconType={<Icon.User/>}
                        text="Trang cá nhân"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        padding: 10
    },
    screenStyle: {
        height: 32,
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bg: {
        flex: 1,
        width: 280,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageAvatarWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        marginLeft: 10,
        marginRight: 10
    },
    imageAvatar: {
        width: 64,
        height: 64,
    },
    fullName: {
        flex: 1,
        justifyContent: 'center',
    },
    pFullName: {
        fontSize: 16
    }
});