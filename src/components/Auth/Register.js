import React, { useState } from 'react'

// Componenst
import Input from '../../GrobalComponents/Input/Input'
import validationEmail from '../../utils/Validations'

const Register = props => {
  const { setSelectedForm } = props
  const [formData, setformData] = useState({})
  const [errorData, setErrorData] = useState({})

  const errores = {
    email: '',
    user: '',
    password: ''
  }

  let formOk = true

  const onSubmit = e => {
    e.preventDefault()

    if (!validationEmail(formData.email) || !formData.email) {
      errores.email = 'Introduzca un email válido '
      formOk = false
    }

    if (!formData.name) {
      errores.user = 'Introduzca el Usuario '
      formOk = false
    }
    if (!formData.password || formData.password.length < 6) {
      errores.password = 'Introduzca una contraseña válida'
      formOk = false
    }
    setErrorData(errores)

    // realizamos la peticion
    registrarUsuario(formOk, formData)
  }

  const onChange = e => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log()
  }

  const registrarUsuario = (formOk, formData) => {
    const baseUrl = 'http://localhost:9000/api/v1/signUp'
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
        })
    } else {
      console.log('error vale madres')
    }
  }

  return (
    <div>
      <h2 className="text-white text-center mb-5">Registrarse </h2>
      <form onSubmit={onSubmit} onChange={onChange}>
        <Input
          type={'email'}
          name={'email'}
          placeholder={'Introduce tu Email'}
          error={errorData.email}
        />
        <Input
          type={'text'}
          name={'name'}
          placeholder={'Introduce tu Usuario'}
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
          Ya Tienes una Cuenta?{' '}
          <span onClick={() => setSelectedForm('Login')}>Iniciar Sesión</span>{' '}
        </p>
      </form>
    </div>
  )
}

export default Register
