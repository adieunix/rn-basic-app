import React, {Component} from "react";
//import { View, Text, Button } from "react-native";
import { Container, Header, Icon, Button, Text, Left, Right, Body, Title } from 'native-base';
import AndroidBackButton from '../helpers/AndroidBackButton';
import * as utility from "../helpers/Utilities";
import * as constants from "../helpers/Constants";
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Home Page Props X: " + JSON.stringify(props));
    }

    componentDidMount = () => {
        utility.getData(constants.API_GET_CONTENT, {
            partner_store_id: "1",
            id: 55
        }).then((result) =>
        {
            console.log('RESSSSSSSSSSSSSSSSS',result);
        }).catch((error) => {
            console.log('ERROOOOOOOOOOOOOOOR',error);
        });
    }

    buttonPress = async () => {
        this.props.navigation.navigate(
            'Profile'
        )
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{marginLeft:-30}}>Home</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Text>HOME PAGE</Text>
                <Button danger onPress={this.buttonPress}>
                    <Text>Danger</Text>
                </Button>
            </Container>
        );
    }
}

export default connect()(Home);


