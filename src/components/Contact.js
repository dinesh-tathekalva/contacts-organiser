import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../contact.css'

class Contact extends Component {
    state = {
        showContactInfo: false,
    }

    onDeleteClicked = () => {
        this.props.deleteClickHandler()
    }
    
    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{' '}
                    <i
                        onClick={() =>
                            this.setState({ showContactInfo: !this.state.showContactInfo })
                        }
                        className="fa fa-sort-down"
                    />
              <i className="fa fa-trash float-right text-danger" onClick={this.onDeleteClicked}/>

                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
