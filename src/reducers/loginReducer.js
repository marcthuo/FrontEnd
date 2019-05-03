import{
    LOGIN,
    CORRECT_LOGIN,
    FAILED_LOGIN,
    GET_LOGIN,
    CORRECT_LOGIN_INFO,
    INCORRECT_LOGIN_INFO
} from "../actions";

const loginState ={
    username: "",
    password:"",
    fetchingLogin: false,
    addingLogin: false,
    updatingLogin: false,
    deletingLogin: false,
    error: null,
}
const loginReducer = (state= loginState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case LOGIN:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_LOGIN:
        console.log(action.payload)
        console.log(state )
        return{
            ...state,
            login:  action.payload,
            fetching: false,
            error: ""
        };
        case FAILED_LOGIN:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case GET_LOGIN:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_LOGIN_INFO:
        console.log(action.payload)
        console.log(state )
        return{
            ...state,
            login:  action.payload,
            fetching: false,
            error: ""
        };
        case INCORRECT_LOGIN_INFO:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        default:
        return{...state};
    }
};
export default loginReducer