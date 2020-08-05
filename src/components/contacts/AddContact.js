import React, { Component } from 'react'
import {Consumer} from '../../context'
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
                                    <div className='form-group'>
                                        <label htmlFor="name">Name</label>
                                        <input name='name' type='text' value={name} onChange={this.onChange} className='form-control form-control-lg' placeholder='Enter name ...' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="email">Email</label>
                                        <input name='email' type='email' value={email} onChange={this.onChange} className='form-control form-control-lg' placeholder='Enter email ...' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="phone">Phone</label>
                                        <input name='phone' type='number' value={phone} onChange={this.onChange} className='form-control form-control-lg' placeholder='Enter phone ...' />
                                    </div>
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