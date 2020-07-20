import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})

export default rootReducer;