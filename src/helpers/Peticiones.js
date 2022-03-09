// Clase para realizar las peticiones

class Peticion {
  /* eslint-disable */
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl
    this.token = token
  }

  //   * Funcion para traer los datos de un endpoint
  async getData() {
    try {
      const respuesta = await fetch(this.baseUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      const datos = await respuesta.json()
      return datos
    } catch (error) {
      console.log(error)
    }
  }
  
  
  //   * Funcion para crear un item
  async createItem(datos = {name:"Usuario nuevo", code:"COD-1" }) {
    try {
      const respuesta = await fetch(this.baseUrl, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      })
      const message = await respuesta.json()
      if (respuesta.ok) {
        return { msg: true, message }
      } else {
        return { msg: false, message }
      }
    } catch (error) {
      console.log(error)
    }
  }

  //  * Funcion para actualizar el item por ID
  async updateItem(
    item,
    datos = { name: 'Nombre Actualizado', code: 'Codigo actualizado' }
  ) {
    alert('Actualizamos el id: ' + item.id)
    try {
      const respuesta = await fetch(this.baseUrl + `/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      })
      const message = await respuesta.json()
      if (respuesta.ok) {
        return { msg: true, message }
      } else {
        return { msg: false, message }
      }
    } catch (error) {
      console.log(error)
    }
  }

  //   * Funcion para eliminar un item por ID
  async deleteItem(item) {
    alert('Eliminaremos el id: ' + item.id)
    try {
      const respuesta = await fetch(this.baseUrl + `/${item.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        }
      })
      const message = await respuesta.json()
      if (respuesta.ok) {
        return { msg: true, message }
      } else {
        return { msg: false, message }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Peticion
