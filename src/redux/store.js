import {applyMiddleware, createStore} from "redux";
import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import {logger} from "redux-logger/src";

// const store = createStore(cakeReducer)
const store = createStore(rootReducer,applyMiddleware(logger))
export default store;