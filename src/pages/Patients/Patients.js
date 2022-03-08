import React from 'react'
import { Helmet } from 'react-helmet'
import { PapperBlock } from 'dan-components'
import Table from '../../GrobalComponents/Table/Table'

class SamplePage extends React.Component {
  render() {
    const title = 'Paciente'
    const description = 'Dandelion Pro'
    let id = 0
    function createData(name, calories, fat, carbs, protein) {
      id += 1
      return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein
      }
    }

    const data = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9)
    ]

    const fields = ['Activo', 'Nombre', 'Codigo', 'Aviso', 'Texto Aviso']
    // console.log(data)
    let datos
    async function getData() {
      const baseUrl = 'http://localhost:9000/api/v1/config1/types'
      const { token } = JSON.parse(localStorage.getItem('res'))
      const respuesta = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      datos = await respuesta.json()
    }

    getData()

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock
          title="Consulta de pacientes"
          whiteBg
          icon="ion-ios-people"
          // desc="A simple Tree Collapsed/Expanded Table"
        >
          <Table data={datos} fields={fields} />
        </PapperBlock>
      </div>
    )
  }
}

export default SamplePage
