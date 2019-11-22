import React from "react";
import { Platform, Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs"; //Version
import { createStackNavigator } from "react-navigation-stack"; //Version
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import NavIcon from "../components/NavIcon";
import { stackStyles } from "./config";

const HeaderTitle = () => {
    return (
        <Image
            style={{ height: 32 }}
            resizeMode="contain"
            source={require("../assets/logo.png")}
        />
    );
};

const stackFactory = (initialRoute, customConfig) =>
    createStackNavigator({
        InitialRoute: {
            screen: initialRoute,
            navigationOptions: {
                ...customConfig,
                headerStyle: { ...stackStyles },
                headerLayoutPreset: "center"
            }
        }
    });

export default createBottomTabNavigator(
    {
        Home: {
            screen: stackFactory(Home, {
                headerTitle: <HeaderTitle />
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios"
                                ? "ios-calendar"
                                : "md-calendar"
                        }
                    />
                )
            }
        },
        Search: {
            screen: stackFactory(Search, {
                headerTitle: <HeaderTitle />
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-list" : "md-list"}
                    />
                )
            }
        },
        Notifications: {
            screen: stackFactory(Notifications, {
                headerTitle: <HeaderTitle />
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios"
                                ? "ios-thumbs-up"
                                : "md-thumbs-up"
                        }
                    />
                )
            }
        },
        Profile: {
            screen: stackFactory(Profile, {
                headerTitle: <HeaderTitle />
            }),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <NavIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios" ? "ios-person" : "md-person"
                        }
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
);
