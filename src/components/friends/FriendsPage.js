import React, { Component } from 'react';
import { connect } from "react-redux";
import { addFriend, getFriendEvent, removeFriend } from "../../actions";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";


export class FriendsPage extends Component {
  componentDidMount(){
      this.props.getFriendEvent()
  }
  removeFriends= (event, index) =>{
      event.preventDefault()
      this.props.removeFriend(index)
  }
  addingFriends = (friend) =>{
    this.props.addFriend(friend);

  }
  
  render() {
    return (
      <div className= "friendPage">
        <h1>Friend Events To Remember</h1>
        <FriendForm adding={this.addingFriends}/>
        <FriendsList delete = {this.removeFriends} friends={this.props.friends}/>
      </div>
    );
  }
}
 const mapStateToProps = state =>{
   console.log(state)
     return{
         friends: state.friendsReducer.friends,
         fetching: state.fetching,
         error: state.error
     }
 }
export default connect(mapStateToProps, { addFriend, getFriendEvent, removeFriend })(FriendsPage)