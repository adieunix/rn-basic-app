import React, {Component} from "react";
import {BackHandler} from "react-native";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        mainNavigator: state.mainNavigator
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
        var index = this.props.mainNavigator.index;
        console.log('INDEX: ',index);
        console.log('BACK PROPS: ',this.props);
        if(index > 1) {
            console.log('BACK');
            return this.props.navigation.goBack();
            if(this.props.navigation.state.routeName == 'Home') return BackHandler.exitApp();
        } else if(index == 1) {
            console.log('EXIT');
            return BackHandler.exitApp();
        }
    }

    render = () => {
        return null;
    }
}

export default connect(mapStateToProps)(AndroidBackButton);