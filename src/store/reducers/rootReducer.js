import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import authReducer from './authReducer'
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer, 
    project: projectReducer
});

export default rootReducer;
