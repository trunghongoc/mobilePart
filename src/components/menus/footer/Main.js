import React, { Component } from 'react';
import Home from './../../../screens/Home';
import MyProfile from './../../../screens/MyProfile';
import * as Icon from './../../../icons/SimpleLine';
import * as Config from './../../../configs/Config';

import { createBottomTabNavigator } from 'react-navigation';

export const Main = createBottomTabNavigator({
        Home: Home,
        MyProfile: MyProfile,
        // News: News,
        // Notifications: Notifications,
    }, {   
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
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
        
    }),
    tabBarOptions: {
        activeTintColor: Config.primaryColor,
        inactiveTintColor: Config.grayM,  
    },
});