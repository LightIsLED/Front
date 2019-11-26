import { createAppContainer } from "react-navigation"; //Version
import { createStackNavigator } from "react-navigation-stack"; //Version
import TabNavigation from "./TabNavigation";
import { stackStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        TabNavigation
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                ...stackStyles
            }
        },
        headerMode: "none"
    }
);

export default createAppContainer(MainNavigation);
