// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import {addUser} from "../../actions";
// import SignupForm from "./SignupForm";

// class SignupPage extends Component {

//   addingUser = (user) =>{
//     this.props.addUser(user);
//   }
//   render() {
//     return (
//       <div>
//         <div>
//             <SignupForm add={this.addingUser} users={this.props.users}/>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = state =>{
//   console.log(state)
//     return{
//         users: state.userReducer.users,
//         fetching: state.fetching,
//         error: state.error
//     }
// }
// export default connect(mapStateToProps, {addUser})(SignupPage);