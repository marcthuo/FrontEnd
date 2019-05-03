import React from 'react';
import {logging} from "../../actions"
import { connect } from "react-redux";

class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password:"",
        }
    }
    changeHandler = e =>{
       this.setState({
         [e.target.name]: e.target.value
       });
    }

    submitHandler = e =>{
      e.preventDefault();
      const{ username, password, id} = this.state;
      this.logging({ username, password, id});
      this.setState({ 
          username:"",
          password: ""
      })
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
            <h1>Login</h1>
            <input onChange = {this.changeHandler} type = "text" name = "username" placeholder='Username' value={this.state.username} required/>
            <input onChange = {this.changeHandler} type = "text" name = "password" placeholder='Password' value={this.state.password} required/>
            <button type = "submit">Log in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state =>{
    console.log(state)
      return{
        //   username: state.loginReducer.username,
        //   password: state.loginReducer.password,
          fetching: state.fetching, 
          error: state.error
      }
  }
export default connect(mapStateToProps, {logging})(LoginForm)
