import React, { Component } from 'react';
import { createBottomTabNavigator, addNavigationHelpers } from 'react-navigation';

import Home from './../../../screens/Home';
import MyProfile from './../../../screens/MyProfile';
import News from './../../../screens/News';
import Notifications from './../../../screens/Notifications';
import * as Config from './../../../configs/Config';

import Layout from './Layout';

export const Main = createBottomTabNavigator({
        Home: Home,
        MyProfile: MyProfile,
        News: News,
        Notifications: Notifications,
    }, {   
    /*navigationOptions: ({ navigation, chym }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            alert(this)
            const { routeName } = navigation.state;
            if (routeName === 'Home')
                return <Icon.PieChart color={tintColor} size={24}/>;
            else if (routeName === 'MyProfile')
                return <Icon.User color={tintColor} size={24}/>;
            else if (routeName === 'News')
                return <Icon.EarphonesAlt color={tintColor} size={24}/>;
            else if (routeName === 'Notifications')
                return <Icon.Bell color={tintColor} size={24}/>;
            else
                return <Icon.PieChart color={tintColor} size={24}/>;
        },
        
    }),*/
    tabBarComponent: (props) => <Layout {...props} />,
    tabBarOptions: {
        activeTintColor: Config.primaryColor,
        inactiveTintColor: Config.grayM,  
    },
});
