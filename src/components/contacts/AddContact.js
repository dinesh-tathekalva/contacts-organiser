import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('submitted')
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const {name, email, phone} = this.state
        return (
            <div className="card mb-3">
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input name='name' type='text' value={name} onChange = {this.onChange} className='form-control form-control-lg' placeholder='Enter name ...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input name='email' type='email' value={email} onChange = {this.onChange} className='form-control form-control-lg' placeholder='Enter email ...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phone">Phone</label>
                            <input name='phone' type='number' value={phone} onChange = {this.onChange} className='form-control form-control-lg' placeholder='Enter phone ...' />
                        </div>
                        <input type='submit' value='Add Contact' className='btn btn-block btn-light' />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact