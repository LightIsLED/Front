import { createAppContainer } from "react-navigation"; //Version
import { createStackNavigator } from "react-navigation-stack"; //Version
import TabNavigation from "./TabNavigation";
//import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createStackNavigator(
    {
        TabNavigation
        //PhotoNavigation
    },
    {
        headerMode: "none"
        //mode: "modal"
    }
);

export default createAppContainer(MainNavigation);
