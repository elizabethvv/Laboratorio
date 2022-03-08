import React from 'react'

import { Switch, Route } from 'react-router-dom'
import ThemeWrapper from '../../../app/containers/App/ThemeWrapper'
import { Login } from '../../../app/containers/pageListAsync'
import { Patients } from '../../components/pageListAsync'
import Application from './Application'
import Auth from './Auth'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

function App() {
  return (
    <ThemeWrapper>
      <Switch>
        <Route exact path="/" component={Application} />
        {/* <Auth /> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route component={Auth} />
        <Route component={NotFound} /> */}
      </Switch>
    </ThemeWrapper>
  )
}

export default App
