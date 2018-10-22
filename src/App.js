import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

import LoginForm from './components/LoginForm';

class App extends Component {
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

    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;