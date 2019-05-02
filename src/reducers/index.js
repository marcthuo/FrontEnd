import { combineReducers } from "redux";
import friendsReducer from "./friendsReducer";
import userReducer from "./userReducer";

export default combineReducers({
    friendsReducer,
    userReducer
})