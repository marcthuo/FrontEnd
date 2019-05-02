import axios from "axios";
export const GET_USER = "GET_USER";
export const CORRECT_GET_USER = "CORRECT_GET_USER";
export const FAILED_GET_USER = "FAILED_GET_USER";
export const ADD_USER = "ADD_USER";
export const CORRECT_ADD_USER = "CORRECT_ADD_USER";
export const FAILED_ADD_USER = "FAILED_ADD_USER";

const URL = "https://better-friends.herokuapp.com";
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