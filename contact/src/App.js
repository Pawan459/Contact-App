import React, { Component } from 'react'
import {ContactComponent} from './components';
import * as contactAction from './actions/ContactAction';
import { connect } from 'react-redux';
import './App.css';

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
    const value = event.target.value;
    this.setState(()=>({
      gender: value
    }))
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      name: value
    }))
  }

  handlePhoneChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      phone: value
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
      <div className = "Contact-App">
        <h1 className = "Contact-App-Title">
          Contact App
        </h1>
        <div className="Contact-Detail">
          <h3>
            Contact Details
          </h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="fname">Name: </label>
              <input type="text" name="fname" placeholder="Enter Your Name Here" onChange={this.handleNameChange}/>
            </div>
            <div>
              <label>Gender: </label>
              <select onChange={this.handleGenderChange} name="Gender">
                <option key={1} value="F">F</option>
                <option key={2} value="M">M</option>
              </select>
            </div>
            <div>
              <label>Phone Number: </label>
              <input type="number"  name="phone" placeholder="Phone Number Here" onChange={this.handlePhoneChange} />
            </div>
            <button className = "Add-Contact-Button" type="submit" value="ADD">ADD CONTACT</button>
          </form>
        </div>
        <div className="All-Contact-Detail">
          {
            this.props.contacts.map((contact, index) => <ContactComponent person={contact} index={index} key={index} />)
          }
        </div>
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