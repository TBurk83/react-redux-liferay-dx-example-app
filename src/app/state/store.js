import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import * as reducers from "./ducks";
import { apiService, createLogger } from "./middleware";
import {composeWithDevTools} from 'redux-devtools-extension'

export default function configureStore( initialState ) {
    const rootReducer = combineReducers( reducers );

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(
            apiService,
            thunk,
            createLogger( true ),
        )),
    );
}