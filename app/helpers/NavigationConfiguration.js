import HomePage from "../page/Home";
import ProfilePage from "../page/Profile";

export const RouteConfiguration = {
    'Home': {screen: HomePage},
    'Profile': {screen: ProfilePage}
}

export const NavigationConfiguration = {
    headerMode: 'none',
    initialRouteName: "Home"
}
