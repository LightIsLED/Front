import { createAppContainer } from "react-navigation"; //Version
import { createStackNavigator } from "react-navigation-stack"; //Version
import TabNavigation from "./TabNavigation";
import { stackStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        TabNavigation
        //PhotoNavigation,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                ...stackStyles
            }
        },
        headerMode: "none"
        //mode: "modal"
    }
);

export default createAppContainer(MainNavigation);
