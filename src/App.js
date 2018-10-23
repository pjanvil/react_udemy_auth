import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection } from './components/common';

import LoginForm from './components/LoginForm';
import {Spinner} from "./components/common/Spinner";

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        // Initialize Firebase

        firebase.initializeApp({
            apiKey: 'AIzaSyCCKDs4diOWb61h0pxCFJDmS2jS_R2Pcm0',
            authDomain: 'authentication-251d0.firebaseapp.com',
            databaseURL: 'https://authentication-251d0.firebaseio.com',
            projectId: 'authentication-251d0',
            storageBucket: 'authentication-251d0.appspot.com',
            messagingSenderId: '367366164220'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            }
            else {
                this.setState({loggedIn: false});
            }
        });

    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <CardSection><Button onPress={() => firebase.auth().signOut() }>Log Out</Button></CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App;