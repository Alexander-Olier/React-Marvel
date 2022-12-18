import { combineReducers } from "redux";
import comicsReducer from "./comicsReducer";

const reducers = combineReducers({
    comics:comicsReducer
})
export default reducers;