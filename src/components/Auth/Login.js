import React, { useState } from 'react'
import Input from '../../GrobalComponents/Input/Input'
import validationEmail from '../../utils/Validations'

const Login = props => {
  const { setSelectedForm, setUser } = props
  console.log(props)

  const [formData, setformData] = useState({})
  const [errorData, setErrorData] = useState({})

  const errores = {
    user: '',
    password: ''
  }

  let formOk = true

  const onSubmit = e => {
    e.preventDefault()
    if (!formData.name) {
      errores.user = 'Introduzca el Usuario '
      formOk = false
    }
    if (!validationEmail(formData.email) || !formData.email) {
      errores.email = 'Introduzca un email válido '
      formOk = false
    }
    if (!formData.password || formData.password.length < 6) {
      errores.password = 'Introduzca una contraseña válida'
      formOk = false
    }
    setErrorData(errores)

    // realizamos la peticion
    veficarLogin(formOk, formData)
  }

  const onChange = e => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const veficarLogin = (formOk, formData) => {
    const baseUrl = 'http://192.168.1.127:9000/api/v1/signIn'
    if (formOk) {
      fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)

          if (res.verify) {
            localStorage.setItem('res', JSON.stringify(res))
            setUser(true)
          }
        })
    } else {
      console.log('Error en la validacion de campos y mostramos un error')
    }
  }

  return (
    <div>
      <h2 className="text-white text-center mb-5">Login</h2>
      <form onSubmit={onSubmit} onChange={onChange}>
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Introduce tu Usuario'}
          error={errorData.user}
        />
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Introduce tu Email'}
          error={errorData.user}
        />
        <Input
          type={'password'}
          name={'password'}
          placeholder={'Introduce tu contraseña'}
          error={errorData.password}
        />

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Continuar
          </button>
        </div>
        <p className="text-white mt-4 text-center">
          No Tienes una Cuenta?{' '}
          <span onClick={() => setSelectedForm('Register')}>Registrate</span>{' '}
        </p>
      </form>
    </div>
  )
}

export default Login
