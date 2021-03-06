import { combineReducers } from "redux";
import friendsReducer from "./friendsReducer";
import userReducer from "./userReducer";
import familyReducer from "./familyReducer"
import loginReducer from "./loginReducer";

export default combineReducers({
    friendsReducer,
    userReducer,
    familyReducer,
    loginReducer
})