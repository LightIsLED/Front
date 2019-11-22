import { View } from "react-native";
import { createAppContainer } from "react-navigation"; //여기 바꾼거
import { createBottomTabNavigator } from "react-navigation-tabs"; //여기 바꾼거
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const TabNavigation = createBottomTabNavigator({
    Home,
    Search,
    // Add: {
    //     screen: View,
    //     navigationOptions: {
    //         tabBarOnPress: () => {
    //             console.log("Add");
    //         }
    //     }
    // },
    Notifications,
    Profile
});

export default createAppContainer(TabNavigation);
