import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

// Componentes
import AuthOptions from '../../components/Auth/AuthOptions'
import Application from './Application'

// Styles

const Auth = () => {
  const res = JSON.parse(localStorage.getItem('res'))
  let flag = false
  if (res !== null && res.token) {
    flag = true
  }

  const [user, setUser] = useState(flag)

  return (
    <Switch>
      {user ? (
        <Route exact path="/home" component={Application} />
      ) : (
        <AuthOptions setUser={setUser} />
      )}
    </Switch>
  )
}

export default Auth
