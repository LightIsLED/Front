import { createAppContainer } from "react-navigation"; //여기 바꾼거
import { createStackNavigator } from "react-navigation-stack"; //여기 바꾼거
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigation = createStackNavigator(
    {
        //routes
        AuthHome,
        Signup,
        Login,
        Confirm
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AuthNavigation);
