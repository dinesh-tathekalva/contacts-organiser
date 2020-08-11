import React from 'react'
import PropTypes from 'prop-types'


const TextInputGroup = ({
    label,
    name,
    value,
    input,
    type,
    placeholder,
    onChange
}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{name}</label>
            <input 
            name={name} 
            type={type} 
            value={value} 
            onChange={onChange} 
            className='form-control form-control-lg' 
            placeholder={placeholder} />
        </div>
    )
}

TextInputGroup.propTypes ={
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInputGroup.defaulProps = {
    type: 'type'
}
export default TextInputGroup