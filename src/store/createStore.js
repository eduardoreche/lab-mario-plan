import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import rootReducer from "./reducers/rootReducer";

export default function configureStore() {
  return createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
