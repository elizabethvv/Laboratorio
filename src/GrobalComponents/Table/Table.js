import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styles from 'dan-components/Tables/tableStyle-jss'

function TableG(props) {
  const { classes, data, fields } = props

  console.log(data)
  return (
    <div className={classes.rootTable}>
      {/* <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">Nutrition</Typography>
        </div>
      </Toolbar> */}
      <Table className={classNames(classes.table, classes.hover)}>
        <TableHead>
          <TableRow>
            {fields.map(field => {
              return <TableCell padding="default">{field}</TableCell>
            })}
            {/* <TableCell padding="default">Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat (g)</TableCell>
            <TableCell align="right">Carbs (g)</TableCell>
            <TableCell align="right">Protein (g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => [
            <TableRow key={n.id}>
              <TableCell padding="default">{n.id}</TableCell>
              <TableCell align="right">{n.active}</TableCell>
              <TableCell align="right">{n.name}</TableCell>
              <TableCell align="right">{n.code}</TableCell>
              <TableCell align="right">{n.protein}</TableCell>
            </TableRow>
          ])}
        </TableBody>
      </Table>
    </div>
  )
}

TableG.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TableG)
