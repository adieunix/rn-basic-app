import React, { Component } from 'react';
import {AppRegistry} from "react-native";
import App from "./app/App";

class Kikuk extends Component {
  render() {
      return (
          <App />
      );
  }
}

AppRegistry.registerComponent('Kikuk', () => Kikuk);
