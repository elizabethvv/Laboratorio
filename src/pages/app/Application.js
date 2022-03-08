import React, { useContext } from 'react'
import { PropTypes } from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { ThemeContext } from 'dan-containers/App/ThemeWrapper'
import Dashboard from 'dan-containers/Templates/Dashboard'
import {
  PersonalDashboard,
  NotFound,
  Patients
} from '../../components/pageListAsync'
// import SamplePage from "../../../src/components/SamplePage";

function Application(props) {
  const { history } = props
  const changeMode = useContext(ThemeContext)
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route exact path="/" component={Patients} />
        {/* Default */}
        <Route exact path="/patients" component={Patients} />
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  )
}

Application.propTypes = {
  history: PropTypes.object.isRequired
}

export default Application
