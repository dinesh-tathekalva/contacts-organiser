import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

class ContactsData extends Component {


    deleteContact = (clickedId) => {
        const { contactsInfo } = this.state

        const newContacts = contactsInfo.filter(contact => contact.id != clickedId)

        this.setState({
            contactsInfo: newContacts
        })
    }

    render() {

        return (
            <Consumer>
                {value => {
                    const { contactsInfo } = value //Destructuring from context value
                    return (
                        <React.Fragment>
                            {contactsInfo.map(contact => //contactsinfo destructured
                                <Contact key={contact.id}
                                    contact={contact}
                                    deleteClickHandler={this.deleteContact.bind(this, contact.id)} />)}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default ContactsData