import { 
    ADD_USER,
    CORRECT_ADD_USER,
    FAILED_ADD_USER
} from "../actions"

const userState ={
    users: [],
    fetchingUser: false,
    addingUser: false,
    updatingUser: false,
    deletingUser: false,
    error: null,
}

const userReducer = (state = userState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case ADD_USER:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_ADD_USER:
        console.log(action.payload, "user payload here")
        console.log(state, "users here")
        return{
            ...state,
            users:  [...state.users, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_ADD_USER:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        default:
        return{...state};
    }
};


export default userReducer