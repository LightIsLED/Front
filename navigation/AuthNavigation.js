import { createAppContainer } from "react-navigation"; //Version
import { createStackNavigator } from "react-navigation-stack"; //Version
// import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from "../screens/Auth/Signup";

const AuthNavigation = createStackNavigator(
    {
        Signup
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AuthNavigation);
