import React, {Component} from "react";
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import Navigation from "./Navigation";
import logger from "redux-logger";
import thunk from "redux-thunk";
import mainNavigatorReducer from './NavigationReducer';
import Home from "./Home";

const store = createStore(
    combineReducers({
        mainNavigator: mainNavigatorReducer
    }),
    undefined,
    applyMiddleware(thunk),
    applyMiddleware(logger)
);

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log("Starting App Props: " + JSON.stringify(props));
    }

    render = () => {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}