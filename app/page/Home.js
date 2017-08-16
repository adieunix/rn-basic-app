import React, {Component} from "react";
//import { View, Text, Button } from "react-native";
import { Container, Header, Content, Button, Text } from 'native-base';
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
            <Container>
                <Text>HOME PAGE</Text>
                <Button danger onPress={this.buttonPress}>
                    <Text>Danger</Text>
                </Button>
            </Container>
        );
    }
}

export default connect()(Home);


