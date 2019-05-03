import React, { Component } from 'react';
import { connect } from "react-redux";
import { addFamily, getFamily, removeFamily, addUser } from "../../actions";
import FamilyList from "./FamilyList";
import FamilyForm from "./FamilyForm";


export class FamilyPage extends Component {
  componentDidMount(){
      this.props.getFamily()
  }
  removeFamily= (event, index) =>{
      event.preventDefault()
      this.props.removeFamily(index)
  }
  addingFamily = (family) =>{
    this.props.addFamily(family);

  }
  
  render() {
    return (
      <div className= "familyPage">
        <h1>Family Events To Remember</h1>
        <FamilyForm adding={this.addingFamily}/>
        <FamilyList delete = {this.removeFamily} family={this.props.family}/>
      </div>
    );
  }
}
 const mapStateToProps = state =>{
   console.log(state)
     return{
         family: state.familyReducer.family,
         fetching: state.fetching,
         error: state.error
     }
 }
export default connect(mapStateToProps, { addFamily, getFamily, removeFamily, addUser})(FamilyPage)