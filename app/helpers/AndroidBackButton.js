import React, {Component} from "react";
import {BackHandler} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        mainNavigator: state.mainNavigator,
    }
}

class AndroidBackButton extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () =>
    {
        BackHandler.addEventListener('hardwareBackPress', this.backAction);
    }

    componentWillUnmount = () =>
    {
        BackHandler.removeEventListener('hardwareBackPress', this.backAction);
    }

    backAction = () => {
        SplashScreen.hide();
        var index = this.props.mainNavigator.index;
        if (index > 1) {
            var targetIndex = index;
            var route = this.props.mainNavigator.routes[targetIndex];
            if (this.props.navigation) {
                this.props.navigation.goBack(route.key);
            }
            return true;
        } else if (index == 1) {
            if (this.props.navigation && this.props.navigation.state &&
                (this.props.navigation.isNotificationTriggered == 'true')) {
                //this.props.navigation.navigate("Home");
                return false;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    render = () => {
        return null;
    }
}

export default connect(mapStateToProps)(AndroidBackButton);