import { 
    GET_FRIEND, 
    CORRECT_GET_FRIEND, 
    FAILED_GET_FRIEND, 
    ADD_FRIEND, 
    REMOVE_FRIEND,
    FAILED_REMOVE_FRIEND, 
    CORRECT_REMOVE_FRIEND,
    CORRECT_ADD_FRIEND,
    FAILED_ADD_FRIEND
} from "../actions"

const startingState ={
    friends: [],
    fetchingFriend: false,
    addingFriend: false,
    updatingFriend: false,
    deletingFriend: false,
    error: null,
}

 const friendsReducer = (state = startingState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case GET_FRIEND:
        return{
            ...state,
            error: "",
            fetching: true
        };
        case ADD_FRIEND:
        return{
            ...state,
            fetching: true
        };
        case REMOVE_FRIEND:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_GET_FRIEND:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            friends: action.payload,
            fetching: false,
            error: ""
        };
        case FAILED_GET_FRIEND:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case FAILED_REMOVE_FRIEND:
        return{
            ...state,
            fetching: false,
            error: action.payload
        }
        case CORRECT_REMOVE_FRIEND:
        return {
            ...state,
            fetching: false,
            error: "",
            friends: state.friends.filter(member =>(member.id !== action.payload))
        }
        case CORRECT_ADD_FRIEND:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            friends:  action.payload,
            fetching: false,
            error: ""
        };
        case FAILED_ADD_FRIEND:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        default:
        return{...state};
    }
};
export default friendsReducer;