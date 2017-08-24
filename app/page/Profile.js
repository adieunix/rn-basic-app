import React, {Component} from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import {connect} from "react-redux";
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import AndroidBackButton from '../components/AndroidBackButton';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


class Profile extends Component {
    constructor(props) {
        super(props);
        console.log("Profile Page Props: " + JSON.stringify(props));
        this.state = {
            'lat': '',
            'lng': '',
            'getMaps': false
        }
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('POSITION: ', position);
                this.setState({
                    'lat': position.coords.latitude,
                    'lng': position.coords.longitude,
                    'getMaps': true
                });
                Geocoder.fallbackToGoogle("AIzaSyCSjLH7-fIObuhfNyksgYXI47j_A1ERYMk");
                var NY = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                Geocoder.geocodePosition(NY).then(res => {
                        console.log('GEO: ',res);
                    })
                    .catch(err => console.log('GEO ERROR: ',err))
            },
            (error) => {
                Alert.alert(
                    'Error',
                    error.message,
                    [
                        {
                            text: 'OK', onPress: () =>
                            {
                                this.props.navigation.navigate(
                                    'Profile'
                                )
                            }
                        }
                    ],
                    {cancelable: false}
                );
            },
            {enableHighAccuracy: false, timeout: 10000, maximumAge: 1000}
        );
    }

    render() {
        console.log('REGION: ',this.state.lat+' '+this.state.lng);

        return (
            <View style ={styles.container}>
                <AndroidBackButton
                    navigation={this.props.navigation}
                />
                {this.state.getMaps ? (
                    <MapView
                        style={styles.map}
                        region={{
                        latitude: this.state.lat,
                        longitude: this.state.lng,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                      }}
                    >
                        <MapView.Marker
                            coordinate={{latitude: this.state.lat, longitude: this.state.lng}}
                            title='My Location'
                            description='Lorem ipsum dolor sir amet'
                        />
                    </MapView>
                ) : (
                    <Text>Failed get your location</Text>
                )}

            </View>
        );
    }
}

export default connect()(Profile);
