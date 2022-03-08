import React, { useState } from 'react'

// Componets
import Login from './Login'
import Register from './Register'

const AuthOptions = props => {
  const { setUser } = props
  const [selectedForm, setSelectedForm] = useState(null)

  const handlerForm = () => {
    switch (selectedForm) {
      case 'Login':
        return <Login setSelectedForm={setSelectedForm} setUser={setUser} />
      case 'Register':
        return <Register setSelectedForm={setSelectedForm} />
      default:
        return <Login setSelectedForm={setSelectedForm} setUser={setUser} />
    }
  }

  return (
    <div className="container d-flex justify-content-center align-middle">
      <div className="form-login">{handlerForm()}</div>
    </div>
  )
}

export default AuthOptions
