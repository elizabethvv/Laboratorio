import React, { useState, useEffect } from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Button, Toolbar, Typography } from '@material-ui/core'
import Peticion from '../../helpers/Peticiones'

const TableG = () => {
  const baseUrl = `http://localhost:9000/api/v1/config1/types`
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBnbWFpbC5jb20iLCJpYXQiOjE2NDY4NDI2MjQsImV4cCI6MTY0Njg1MzQyNH0.12v21_mBxQW8Vvs6ZnyFJ4gmU1PTRG4lbVaAy2LvlhY`
  const peticion = new Peticion(baseUrl, token)
  const [data, setData] = useState({})

  // Traemos los datos
  const getAllData = async () => {
    const datosAll = await peticion.getData()
    setData(datosAll)
  }

  useEffect(() => {
    getAllData()
  }, [])

  // Acutazaliar item
  async function updateItem(item) {
    const respuesta = await peticion.updateItem(item)
    respuesta.msg ? getAllData() : console.log(respuesta.message)
  }

  // Elimianar item
  async function deleteItem(item) {
    const respuesta = await peticion.deleteItem(item)
    respuesta.msg ? getAllData() : console.log(respuesta.message)
  }

  return (
    <>
      <Toolbar>
        <div>
          <Typography variant="h6">Pacientes</Typography>
        </div>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(data).map(item => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.code}</TableCell>
              {item.active ? (
                <TableCell>Activo</TableCell>
              ) : (
                <TableCell>False</TableCell>
              )}
              <TableCell>
                <Button onClick={() => updateItem(item)}>✏</Button>
                <Button>✅</Button>
                <Button onClick={() => deleteItem(item)}>❌</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default TableG

// function TableG(props) {
//   /* eslint-disable */
//   const { classes, data } = props
// return (
//   <div className={classes.rootTable}>
//     {/* <Toolbar className={classes.toolbar}>
//       <div className={classes.title}>
//         <Typography variant="h6">Nutrition</Typography>
//       </div>
//     </Toolbar> */}
//     <Table className={classNames(classes.table, classes.hover)}>
//       <TableHead>
//         <TableRow>
//           {/* {fields.map(field => {
//             return <TableCell padding="default">{field}</TableCell>
//           })} */}
//           {/* <TableCell padding="default">Dessert (100g serving)</TableCell>
//           <TableCell align="right">Calories</TableCell>
//           <TableCell align="right">Fat (g)</TableCell>
//           <TableCell align="right">Carbs (g)</TableCell>
//           <TableCell align="right">Protein (g)</TableCell> */}
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {/* {data.map(n => [
//           <TableRow key={n.id}>
//             <TableCell padding="default">{n.id}</TableCell>
//             <TableCell align="right">{n.active}</TableCell>
//             <TableCell align="right">{n.name}</TableCell>
//             <TableCell align="right">{n.code}</TableCell>
//             <TableCell align="right">{n.protein}</TableCell>
//           </TableRow>
//         ])} */}
//         {data}
//       </TableBody>
//     </Table>
//   </div>
// )
// }

// TableG.propTypes = {
//   classes: PropTypes.object.isRequired
// }

// export default withStyles(styles)(TableG)
