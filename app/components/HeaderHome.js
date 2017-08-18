import React, {Component} from "react";
import { Header, Icon, Button, Text, Left, Right, Body, Title } from 'native-base';
import AndroidBackButton from '../helpers/AndroidBackButton';

class HeaderHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                <Title style={{marginLeft:-30}}>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

export default HeaderHome;
