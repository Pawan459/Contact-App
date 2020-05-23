import React, { Component } from 'react';
import * as contactAction from '../../actions/ContactAction';
import { connect } from 'react-redux';

import female from '../../images/female.jpg';
import male from '../../images/male.jpg'


class ContactComponent extends Component {

    constructor(props){
        super(props);
        this.removeContact = this.removeContact.bind(this);
    }

    removeContact(event, index){
        event.preventDefault();
        this.props.deleteContact(index);
    }

    render() {
        const {person, index} = this.props;
        return (
            <div>
                {person.gender === 'F'?(<img src={female} alt="Female Profile Here" />):(<img src={male} alt="Male Profile Here"/>)}
                <div>
                    <div>
                        <label>Name: </label>
                        <small>{person.name}</small>
                    </div>
                    <div>
                        <label>Contact: </label>
                        <small>{person.phone}</small>
                    </div>
                </div>
                <div>
                    <button onClick={(event)=> this.removeContact(event, index)}>Remove</button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: index => dispatch(contactAction.deleteContact(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent);