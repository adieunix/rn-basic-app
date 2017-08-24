import React, {Component} from "react";
import { View, Text, BackAndroid } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {addNavigationHelpers, StackNavigator} from "react-navigation";
import {RouteConfiguration, NavigationConfiguration} from './NavigationConfiguration';
import {connect} from "react-redux";

export const Navigator = StackNavigator(RouteConfiguration, NavigationConfiguration);

const mapStateToProps = (state) => {
    return {
        mainNavigator: state.mainNavigator,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}>
                <Navigator
                    ref="navigation"
                    navigation={
                        addNavigationHelpers({
                            dispatch: this.props.dispatch,
                            state: this.props.mainNavigator
                        })
                    }
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
