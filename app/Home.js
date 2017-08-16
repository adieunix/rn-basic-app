import React, {Component} from "react";
import { View, Text } from "react-native";
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Home Page Props X: " + JSON.stringify(props));
    }

    render() {
        return (
            <Text>HOME PAGE</Text>
        );
    }
}

export default connect()(Home);


