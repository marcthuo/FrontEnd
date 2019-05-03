import React from "react";
import { connect } from "react-redux";


class FriendForm extends React.Component {
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
        const{ name, phone, anniversary, birthday, graduation, wedding, comment, id} = this.state;
        this.props.adding({ name, phone, anniversary, birthday, graduation, wedding, comment, id});
        this.setState({ 
            name: "", 
            phone: "", 
            anniversary: "", 
            birthday: "", 
            graduation: "", 
            wedding: "", 
            comment: ""
        })
    }
    render(){
        return(
            <form onSubmit = {this.submitHandler}>
                <input onChange = {this.changeHandler} type = "text" name = "name" placeholder='Name' value={this.state.name} required/>
                <input onChange = {this.changeHandler} type = "number" name = "phone" placeholder="Phone" value={this.state.phone} required/>
                <input onChange = {this.changeHandler} type = "text" name = "anniversary" placeholder="Anniversary" value={this.state.anniversary}/>
                <input onChange = {this.changeHandler} type = "text" name = "birthday" placeholder="Birthday" value={this.state.birthday}  required/>
                <input onChange = {this.changeHandler} type = "text" name = "graduation" placeholder="Graduation" value={this.state.graduation} />
                <input onChange = {this.changeHandler} type = "text" name = "wedding" placeholder="Wedding" value={this.state.wedding} />
                <input onChange = {this.changeHandler} type = "text" name = "comment" placeholder="Comment" value={this.state.comment} required/>
                <button type = "submit">Add Event</button>
            </form>
            
        )
    }
}
const mapStateToProps = state =>{
    return {error: state.error}
}

export default connect(mapStateToProps)(FriendForm)