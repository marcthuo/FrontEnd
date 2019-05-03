import React from 'react';
import {logging} from "../../actions";
import { connect } from "react-redux";

class LoginForm extends React.Component {
    constructor(){
        super();
        this.state = {users: {
            username: "",
            password:"",
        }}
    }

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
    this.props.logging(this.state.users);
    this.props.history.push('/login');
}

  render() {
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
            <h1>Login</h1>
            <input onChange = {this.changeHandler} type = "text" name = "username" placeholder='Username' value={this.state.username} required/>
            <input onChange = {this.changeHandler} type = "password" name = "password" placeholder='Password' value={this.state.password} required/>
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
