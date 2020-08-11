import React, { Component } from 'react'
import {Consumer} from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
// import uuid from 'uuid'
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (dispatch ,e) => {
        e.preventDefault()
        const{name, email, phone} = this.state
        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone } = this.state

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card mb-3">
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label = "Name"
                                        name = "Name"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                    />
                                    <TextInputGroup 
                                        label = "name"
                                        name = "E-mail"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                    />
                                    <TextInputGroup 
                                        label = "Phone"
                                        name = "Phone"
                                        placeholder = "Enter Name"
                                        value = {name}
                                        onChange = {this.onChange}
                                    />
                                    <input type='submit' value='Add Contact' className='btn btn-block btn-light' />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact