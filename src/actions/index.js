//Axios Import
import axios from "axios";
//Friend Exports
export const GET_FRIEND = "GET_FRIEND";
export const CORRECT_GET_FRIEND = "CORRECT_GET_FRIEND";
export const FAILED_GET_FRIEND = "FAILED_GET_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";
export const CORRECT_ADD_FRIEND = "CORRECT_ADD_FRIEND";
export const FAILED_ADD_FRIEND = "FAILED_ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const CORRECT_REMOVE_FRIEND = "CORRECT_REMOVE_FRIEND";
export const FAILED_REMOVE_FRIEND = "FAILED_REMOVE_FRIEND";
// User Exports
export const GET_USER = "GET_USER";
export const CORRECT_GET_USER = "CORRECT_GET_USER";
export const FAILED_GET_USER = "FAILED_GET_USER";
export const ADD_USER = "ADD_USER";
export const CORRECT_ADD_USER = "CORRECT_ADD_USER";
export const FAILED_ADD_USER = "FAILED_ADD_USER";
// Family Exports
export const GET_FAMILY = "GET_FAMILY";
export const CORRECT_GET_FAMILY = "CORRECT_GET_FAMILY";
export const FAILED_GET_FAMILY = "FAILED_GET_FAMILY";
export const ADD_FAMILY = "ADD_FAMILY";
export const CORRECT_ADD_FAMILY = "CORRECT_ADD_FAMILY";
export const FAILED_ADD_FAMILY = "FAILED_ADD_FAMILY";
export const REMOVE_FAMILY = "REMOVE_FAMILY";
export const CORRECT_REMOVE_FAMILY = "CORRECT_REMOVE_FAMILY";
export const FAILED_REMOVE_FAMILY = "FAILED_REMOVE_FAMILY";
// Login Exports
export const LOGIN = "LOGIN";
export const CORRECT_LOGIN = "CORRECT_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const GET_LOGIN = "GET_LOGIN"
export const CORRECT_LOGIN_INFO = "CORRECT_LOGIN_INFO"
export const INCORRECT_LOGIN_INFO = "INCORRECT_LOGIN_INFO";

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
    .then(response => {dispatch({type: CORRECT_ADD_FRIEND, payload: response.data}); return true})
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

export const getUser = ()=> (dispatch)=>{
    dispatch({type: GET_USER});
    axios
    .get(`${URL}/api/users`)
    .then(response => dispatch({type:CORRECT_GET_USER, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_USER, payload: error}))
}
//------------------------------------------Register Actions-------------------------------------------//
export const addUser = (index)=> (dispatch)=>{
    dispatch({type: ADD_USER});
    axios
    .post(`${URL}/api/auth/register`, index)
    .then(response => {dispatch({type: CORRECT_ADD_USER, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_ADD_USER, payload: error}); return false})
}

//-------------------------------------------------Family Actions-------------------------------------------//
export const getFamily = ()=> (dispatch)=>{
    dispatch({type: GET_FAMILY});
    axios
    .get(`${URL}/api/family`)
    .then(response => dispatch({type:CORRECT_GET_FAMILY, payload: response.data}))
    .catch(error => dispatch({type: FAILED_GET_FAMILY, payload: error}))
}

export const addFamily = (index)=> (dispatch)=>{
    dispatch({type: ADD_FAMILY});
    axios
    .post(`${URL}/api/family`, index)
    .then(response => {dispatch({type: CORRECT_ADD_FAMILY, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_ADD_FAMILY, payload: error}); return false})
    
}

export const removeFamily= (members) => (dispatch)=>{
    dispatch({type: REMOVE_FAMILY})
    axios
    .delete(`${URL}/api/family/${members}`)
    .then(() => {dispatch({type: CORRECT_REMOVE_FAMILY, payload: members}); return true})
    .catch(error => {dispatch({type: FAILED_REMOVE_FAMILY, payload: error}); return false})
}
//---------------------------------------------------------Login Actions-----------------------------------------//
export const checkLogin = (index)=> (dispatch)=>{
    dispatch({type: GET_LOGIN});
    axios
    .get(`${URL}/api/auth/login`, index)
    .then(response => {dispatch({type: CORRECT_LOGIN_INFO, payload: response.data}); return true})
    .catch(error => {dispatch({type: INCORRECT_LOGIN_INFO, payload: error}); return false})
    
}
export const logging = (index)=> (dispatch)=>{
    dispatch({type: LOGIN});
    axios
    .post(`${URL}/api/auth/login`, index)
    .then(response => {dispatch({type: CORRECT_LOGIN, payload: response.data}); return true})
    .catch(error => {dispatch({type: FAILED_LOGIN, payload: error}); return false})
    
}
