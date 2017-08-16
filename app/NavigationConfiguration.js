import HomePage from "./Home";
import ProfilePage from "./Profile";

export const RouteConfiguration = {
    'Home': {screen: HomePage},
    'Profile': {screen: ProfilePage}
}

export const NavigationConfiguration = {
    headerMode: 'none',
    initialRouteName: "Home"
}
