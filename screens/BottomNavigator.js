// I would like to load my own function when clicking on a tab. So instead of loading the tab's screen, it should load my (tested and working) function that allows you to pick an image from the iOS simulator gallery. This tab 'AddImage' sits in between the 'Home' and 'Settings' tab. I don't need to switch to any other tab, just on clicking the 'AddImage' tab icon, run my function openGallery().

import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableOpacity, CameraRoll, Image } from 'react-native';
import { Alert, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation-tabs';
// import Home from './Home'


//Empty AddImage Screen
export class AddImage extends Component {

    constructor(props) {
        super(props);

        this.openGallery = this.openGallery.bind(this);
    }
    openGallery() {
        //execute function.......
    }

    componentDidMount() {
        this.props.navigation.setParams({ openGallery: this.openGallery.bind(this) })
    }
}

export default createBottomTabNavigator({

    // Home: {
    //     screen: Home,
    //     navigationOptions: {
    //         tabBarLabel: 'Home',
    //         tabBarIcon: ({ tintColor }) => (<Icon name="home" color={tintColor} size={24} />)
    //     }
    // },
    AddImage: {
        screen: () => null,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({ tintColor }) => (<Icon name="plus-square" color={tintColor} size={24} />),
            tabBarOnPress: () => { this.openGallery() },
        }
    },
    AddImage: {
        screen: () => null,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({ tintColor }) => (<Icon name="plus-square" color={tintColor} size={24} />),
            tabBarOnPress: () => { this.openGallery() },
        }
    },
    AddImage: {
        screen: () => null,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({ tintColor }) => (<Icon name="plus-square" color={tintColor} size={24} />),
            tabBarOnPress: () => { this.openGallery() },
        }
    },

    // Settings: {
    //     screen: Settings,
    //     navigationOptions: {
    //         tabBarLabel: 'Settings',
    //         tabBarIcon: ({ tintColor }) => (<Icon name="cog" color={tintColor} size={24} />)
    //     }
    // },
})

    // {//other bottom tab configurations
    //     order: ['Home', 'AddVideo', 'Settings'],
    // }
    //         });