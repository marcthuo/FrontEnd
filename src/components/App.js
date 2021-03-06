import React, { Component } from 'react';
import { connect } from "react-redux";
import FamilyPage from "./family/FamilyPage";
import FriendsPage from "./friends/FriendsPage";
import SignupPage from "./signUp/SignupPage";
import PrivateRoute from "../auth/authorize";
import Login from "./login/Login";
import { NavLink, withRouter, Route } from 'react-router-dom';


export class App extends Component {

 render() {
   return (
     <div className= "App">
       <div className = 'nav'>
         <NavLink className = 'nav-item' to = '/friends'>Friends</NavLink>
         <NavLink className = 'nav-item' to = '/family'>Family</NavLink>
         <NavLink className = 'nav-item'  to = '/'>Sign Up</NavLink>
         <NavLink className = 'nav-item' to = '/login'>Login</NavLink>
       </div>
     <PrivateRoute path ={"/friends"} render= {props =>(<FriendsPage {...props}/>)}/>
     <PrivateRoute path ={"/family"} render= {props =>(<FamilyPage {...props}/>)}/>
     <Route exact path ={"/"} render= {props =>(<SignupPage {...props}/>)}/>
     <Route path ={"/login"} render= {props =>(<Login {...props}/>)}/>
     </div>
   );
 }
}
const mapStateToProps = state =>{
  console.log(state)
    return{
        fetching: state.fetching,
        error: state.error
    }
}
export default connect(mapStateToProps) (withRouter(App))