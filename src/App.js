import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import routesData from '@/router/index'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        {
          routesData.routes.map(route => {
            return <Route key={route.path} {...route} />
          })
        }
      </Switch>
    </HashRouter>
  )
}

export default App