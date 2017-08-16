import React, {Component} from "react";
import { View, Text, Button } from "react-native";
import AndroidBackButton from '../helpers/AndroidBackButton';
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Home Page Props X: " + JSON.stringify(props));
    }

    buttonPress = async () => {
        this.props.navigation.navigate(
            'Profile'
        )
    }

    render() {
        return (
            <View>
                <Text>HOME PAGE</Text>
                <Button
                    onPress={this.buttonPress}
                    title="Learn More"
                    color="#841584"
                />
            </View>
        );
    }
}

export default connect()(Home);


