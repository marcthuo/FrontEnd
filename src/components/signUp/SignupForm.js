import React from 'react';
import { connect } from "react-redux";
import { addUser, getData } from "../actions";

class SignupForm extends React.Component {
    constructor(){
        super();
        this.state = {users: {
            username: "",
            password:""
        }
    }}

    componentDidMount() {
      this.props.getData();
    }

    changeHandler = e =>{
       this.setState({ users: {
         ...this.state.users,
         [e.target.name]: e.target.value
       }
       });
    }

    submitHandler = e =>{
      e.preventDefault();
      this.props.addUser(this.state.users);
      this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
            <h1>Sign Up Here.</h1>
            <input onChange = {this.changeHandler} type = "text" name = "username" placeholder='Username' value={this.state.username} required/>
            <input onChange = {this.changeHandler} type = "password" name = "password" placeholder='Password' value={this.state.password} required/>
            <button type = "submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {error: state.error}
}
export default connect(mapStateToProps, {addUser, getData})(SignupForm)
