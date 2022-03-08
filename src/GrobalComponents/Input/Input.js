import React from 'react'

const Input = props => {
  const { type, name, placeholder = '', error = '' } = props
  return (
    <div className="mb-3">
      {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
      <input
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
        error={error}
      />
      <span className="error">{error}</span>
    </div>
  )
}

export default Input
