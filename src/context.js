import React, {Component} from 'react'

const Context = React.createContext()

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
        ]
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