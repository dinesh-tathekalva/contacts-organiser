import React, {Component} from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contactsInfo: state.contactsInfo.filter(contact => contact.id !== action.payload)
            }
            default: 
            return state
    }
}

export class Provider extends Component {
    state = {
        contactsInfo: [
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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render (){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer