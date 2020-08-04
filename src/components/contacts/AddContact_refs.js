import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super(props)

        this.nameInput = React.createRef()
        this.emailInput = React.createRef()
        this.phoneInput = React.createRef()
    }
    onSubmit = e => {
        e.preventDefault()
        console.log('submitted')
        const contact = {
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
            email: this.emailInput.current.value

        }
    }

    static defaultProps = {
        name: 'Fred Smith',
        email: 'red@gamil.com',
        phone: 123-456-7890
    }

    render() {
        const {name, email, phone} = this.props
        return (
            <div className="card mb-3">
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input name='name' type='text' defaultValue={name} ref = {this.nameInput} className='form-control form-control-lg' placeholder='Enter name ...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input name='email' type='email' defaultValue={email} ref={this.emailInput} className='form-control form-control-lg' placeholder='Enter email ...' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phone">Phone</label>
                            <input name='phone' type='number' defaultValue={phone} ref={this.phoneInput} className='form-control form-control-lg' placeholder='Enter phone ...' />
                        </div>
                        <input type='submit' value='Add Contact' className='btn btn-block btn-light' />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact