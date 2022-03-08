/* eslint-disable */

import React from 'react'
import Loading from 'dan-components/Loading'
import loadable from '../../app/utils/loadable'

// Dashboard
export const PersonalDashboard = loadable(
  () => import('dan-containers/Dashboard/PersonalDashboard'),
  {
    fallback: <Loading />
  }
)
export const NotFound = loadable(
  () => import('dan-containers/NotFound/NotFound'),
  {
    fallback: <Loading />
  }
)
export const Patients = loadable(() => import('../pages/Patients/Patients'), {
  fallback: <Loading />
})
