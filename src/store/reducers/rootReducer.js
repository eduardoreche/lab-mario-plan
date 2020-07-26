import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase,
    firestore: firestoreReducer,
});

export default rootReducer;