import axios from "axios";
export const GET_FRIEND = "GET_FRIEND";
export const CORRECT_GET_FRIEND = "CORRECT_GET_FRIEND";
export const FAILED_GET_FRIEND = "FAILED_GET_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";
export const CORRECT_ADD_FRIEND = "CORRECT_ADD_FRIEND";
export const FAILED_ADD_FRIEND = "FAILED_ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const CORRECT_REMOVE_FRIEND = "CORRECT_REMOVE_FRIEND";
export const FAILED_REMOVE_FRIEND = "FAILED_REMOVE_FRIEND";


const URL = "https://better-friends.herokuapp.com";

//--------------------------------------------Friend Actions-----------------------------------------//
export const getFriendEvent = ()=> (dispatch)=>{
    dispatch({type: GET_FRIEND});
    axios
    .get(`${URL}/api/friends`)
    .then(response => dispatch({type:CORRECT_GET_FRIEND, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_FRIEND, payload: error}))
}

export const addFriend = (index)=> (dispatch)=>{
    dispatch({type: ADD_FRIEND});
    axios
    .post(`${URL}/api/friends`, index)
    .then(response => {dispatch({type: CORRECT_ADD_FRIEND, payload: response.data},console.log(response.data, "logging data here")); return true})
    .catch(error => {dispatch({type: FAILED_ADD_FRIEND, payload: error}); return false})
    
}

export const removeFriend = (members) => (dispatch)=>{
    dispatch({type: REMOVE_FRIEND})
    axios
    .delete(`${URL}/api/friends/${members}`)
    .then(() => {dispatch({type: CORRECT_REMOVE_FRIEND, payload: members}); return true})
    .catch(error => {dispatch({type: FAILED_REMOVE_FRIEND, payload: error}); return false})
}
//---------------------------------------------User Actions-----------------------------------------------//



