import HomePage from "../page/Home";
import ProfilePage from "../page/Profile";
import StartPage from "../page/Start";

export const RouteConfiguration = {
    'Home': {screen: HomePage},
    'Profile': {screen: ProfilePage},
    'Start': {screen: StartPage}
}

export const NavigationConfiguration = {
    headerMode: 'none',
    initialRouteName: "Start"
}
