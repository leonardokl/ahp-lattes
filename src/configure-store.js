/* global process */

import thunk from "redux-thunk";
import reducers from "reducers";
import {applyMiddleware, createStore, combineReducers, compose} from "redux";

const configureStore = () => {
    const options = process.env.NODE_ENV === "development" ? compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    ) : applyMiddleware(thunk);

    const store = createStore(combineReducers(reducers), options);

    return store;
};

export default configureStore();
