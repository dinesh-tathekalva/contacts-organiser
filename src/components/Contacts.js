import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
            contacts: [
                {   
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '999-777-9979'
                },
                {   
                    id: 2,
                    name: 'Katie Doe',
                    email: 'kdoe@gmail.com',
                    phone: '999-888-9989'
                },
                {   
                    id: 3,
                    name: 'Christoph Waltz',
                    email: 'chris@gmail.com',
                    phone: '999-999-9999'
                }
            ]
        }
    
    render() {
        const {contacts} = this.state
        return (
            <React.Fragment>
                {contacts.map (contact => 
                    <Contact key = {contact.id}
                            contact={contact} />)}
            </React.Fragment>
        )
    }
}

export default Contacts