import React, {Component} from "react";
import { Container, Header, Icon, Button, Text, Left, Right, Body, Title, List, ListItem, Content, Spinner } from 'native-base';
import {connect} from "react-redux";
import AndroidBackButton from '../components/AndroidBackButton';

class Start extends Component {
    constructor(props) {
        super(props);
        console.log("Start Page Props: " + JSON.stringify(props));
    }

    componentDidMount = () => {
        this.props.navigation.navigate(
            'Home'
        )
    }

    render() {
        return (
            <Container>
                <AndroidBackButton
                    navigation={this.props.navigation}
                />
                <Spinner color="black" />
            </Container>
        )}
}

export default connect()(Start);
