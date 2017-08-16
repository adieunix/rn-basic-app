import React, {Component} from "react";
import { View, Text } from "react-native";
import AndroidBackButton from './AndroidBackButton';
import {connect} from "react-redux";

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("Profile Page Props: " + JSON.stringify(props));
    }

    render() {
        return (
            <Text>Profile Page</Text>
        );
    }
}

export default connect()(Profile);
