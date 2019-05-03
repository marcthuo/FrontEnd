import { 
    GET_FAMILY, 
    CORRECT_GET_FAMILY, 
    FAILED_GET_FAMILY, 
    ADD_FAMILY, 
    REMOVE_FAMILY,
    FAILED_REMOVE_FAMILY, 
    CORRECT_REMOVE_FAMILY,
    CORRECT_ADD_FAMILY,
    FAILED_ADD_FAMILY
} from "../actions"

const familyState ={
    family: [],
    fetchingFamily: false,
    addingFamily: false,
    updatingFamily: false,
    deletingFamily: false,
    error: null,
}
console.log(familyState, "here i am")
 const familyReducer = (state = familyState, action) =>{
    console.log('reducer', action);
    switch(action.type){
        case GET_FAMILY:
        return{
            ...state,
            error: "",
            fetching: true
        };
        case ADD_FAMILY:
        return{
            ...state,
            fetching: true
        };
        case REMOVE_FAMILY:
        return{
            ...state,
            fetching: true
        };
        case CORRECT_GET_FAMILY:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            family: action.payload,
            fetching: false,
            error: ""
        };
        case FAILED_GET_FAMILY:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case CORRECT_ADD_FAMILY:
        console.log(action.payload)
        console.log(state)
        return{
            ...state,
            family:  [...state.family, action.payload],
            fetching: false,
            error: ""
        };
        case FAILED_ADD_FAMILY:
        return{
            ...state,
            error: action.payload,
            fetching: false
        };
        case FAILED_REMOVE_FAMILY:
        return{
            ...state,
            fetching: false,
            error: action.payload
        }
        case CORRECT_REMOVE_FAMILY:
        return {
            ...state,
            fetching: false,
            error: "",
            family: state.family.filter(member =>(member.id !== action.payload))
        }
        default:
        return{...state};
    }
};
export default familyReducer;