import React from 'react';

class SignupForm extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '', 
            phone: "", 
            anniversary: '', 
            birthday: '', 
            graduation: '', 
            wedding: '', 
            comment: ''
        }
    }
    changeHandler = e =>{
       this.setState({
         [e.target.name]: e.target.value
       });
    }
    submitHandler = e =>{
        e.preventDefault();
        const{ username, password} = this.state;
        //this.props.adding({username, password});
        this.setState({ 
            username: "", 
            password: "", 
        })
    }
  render() {
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
            <h1>Sign Up Here.</h1>
            <input onChange = {this.changeHandler} type = "text" name = "username" placeholder='Username' value={this.state.username} required/>
            <input onChange = {this.changeHandler} type = "text" name = "password" placeholder='Password' value={this.state.password} required/>
            <button type = "submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default SignupForm
