import React from 'react'
import { match, Router } from 'react-router'
import { render } from 'react-dom'

import routes from './routes/RootRoute'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`


match({ routes, location }, () => {
  render(
    <Router routes={routes} history={createHistory()} />,
    document.getElementById('app')
  )
})
