import React, {Component} from "react";
//import { View, Text, Button } from "react-native";
import { Container, Header, Icon, Button, Text, Left, Right, Body, Title, List, ListItem, Content, Spinner } from 'native-base';
import AndroidBackButton from '../helpers/AndroidBackButton';
import HeaderHome from '../components/HeaderHome';
import * as utility from "../helpers/Utilities";
import * as constants from "../helpers/Constants";
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Home Page Props X: " + JSON.stringify(props));
        this.state = {
            spinner: true,
            data: []
        }
    }

    componentWillMount = () => {
        utility.getData(constants.API_GET_CONTENT_GENRES, {
            partner_store_id: "2",
            content_category_id: 10
        }).then((result) =>
        {
            this.setDataState(result);
        }).catch((error) => {
            console.log('ERROOOOOOOOOOOOOOOR',error);
        });
    }

    setDataState = (data) => {
        var state = {};
        var newData = this.state.data.concat(data);
        Object.assign(state, this.state);
        state.data = newData;
        state.spinner = false;
        this.setState(state);
    }

    buttonPress = async () => {
        this.props.navigation.navigate(
            'Profile'
        )
    }

    render() {
        return (
            <Container>
                <HeaderHome
                    title="Home"
                />
                <Button danger onPress={this.buttonPress}>
                    <Text>To Profile</Text>
                </Button>
                {this.state.spinner ? (
                    <Spinner color="black" />
                ) : (
                    <List dataArray={this.state.data}
                          renderRow={(item) =>
                            <ListItem>
                                <Text>{item.name}</Text>
                            </ListItem>
                        }
                    >
                    </List>
                )}

            </Container>
        );
    }
}

export default connect()(Home);


