import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'

class ContactsData extends Component {
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
                                   />)}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default ContactsData