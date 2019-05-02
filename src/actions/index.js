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
export const GET_USER = "GET_USER";
export const ADD_USER = "ADD_USER";

const URL = "https://better-friends.herokuapp.com";

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

export const getUser = ()=> (dispatch)=>{
    dispatch({type: GET_USER});
    axios
    .get(`${URL}/api/users`)
    .then(response => dispatch({type:CORRECT_GET_USER, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_USER, payload: error}))
}

export const addUser = (index)=> (dispatch)=>{
    dispatch({type: ADD_USER});
    axios
    .post(`${URL}/api/users`, index)
    .then(response => {dispatch({type: CORRECT_ADD_USER, payload: response.data},console.log(response.data, "logging user data here")); return true})
    .catch(error => {dispatch({type: FAILED_ADD_USER, payload: error}); return false})
    
}


