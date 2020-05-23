import React, { Component } from 'react'
import {ContactComponent} from './components';
import * as contactAction from './actions/ContactAction';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state={
      name: '',
      phone: '',
      gender: 'M'
    }

  }

  handleGenderChange(event){
    this.setState(()=>({
      gender: event.target.value
    }))
    console.log(event);
  }

  handleNameChange(event) {
    this.setState(() => ({
      name: event.target.value
    }))
    console.log(event);
  }

  handlePhoneChange(event) {
    this.setState(() => ({
      phone: event.target.value
    }))
  }

  handleSubmit(event){
    event.preventDefault();
    let person = {
      name: this.state.name,
      phone: this.state.phone,
      gender: this.state.gender
    }

    this.setState(()=>({
      name: '',
      phone: ''
    }))

    this.props.createContact(person);
  }

  render() {
    return (
      <div>
        <h1>
          Contact App
        </h1>
        <div>
          <h3>
            Add Contact
          </h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="fname">Name: </label>
              <input type="text" name="fname" placeholder="Enter Your Name Here" onChange={this.handleNameChange}/>
            </div>
            <div>
              <select name="Gender">
                <option onClick={this.handleGenderChange} value="F">F</option>
                <option onClick={this.handleGenderChange} value="M">M</option>
              </select>
            </div>
            <div>
              <label>Phone Number: </label>
              <input type="number"  name="phone" placeholder="Enter Your Phone Number Here" onChange={this.handlePhoneChange} />
            </div>
            <input type="submit" value="ADD"/>
          </form>
        </div>
        {
          this.props.contacts.map((contact, index) => <ContactComponent person={contact} index={index} key={index}/>)
        }
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return{
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    createContact: contact => dispatch(contactAction.createContact(contact)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);