import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from 'redux-firestore'

import { firebaseConfig } from './config/fbConfig'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store/createStore'

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore();

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
