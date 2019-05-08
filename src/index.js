import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Firebase config
const firebaseConfig = {
    apiKey: 'AIzaSyDZSqcH_CLrqtKlZx-ySdNQxGW5wyrDGfM',
    authDomain: 'awesome-food-manager-94122.firebaseapp.com',
    databaseURL: 'https://awesome-food-manager-94122.firebaseio.com',
    projectId: 'awesome-food-manager-94122',
    storageBucket: 'awesome-food-manager-94122.appspot.com',
    messagingSenderId: '354898593672',
    appId: '1:354898593672:web:98f44022edbd5553'
}
firebase.initializeApp(firebaseConfig)

// react-redux-firebase options
const config = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
}

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config)
)(createStore)

// const store = createStore(rootReducer)
const store = createStoreWithFirebase(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
