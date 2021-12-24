import { useEffect } from 'react'
import { Redirect, Switch, useLocation } from 'react-router'
import { css } from '@emotion/react'
import { Route } from 'react-router-dom'

import { setRedirectPath } from '#models/common'
import Navbar from '#components/Navbar'
import { Home } from './home'
import { Login } from './login'
import { Records } from './records'
import { Settings } from './settings'
import { Stats } from './stats'
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { getCurrentUserData } from '#models/user'

const App = () => {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const redirectPath = useAppSelector((state) => state.common.redirectPath)

  useEffect(() => {
    if (redirectPath !== null) {
      dispatch(setRedirectPath(null))
    }
  }, [redirectPath])

  useEffect(() => {
    dispatch(getCurrentUserData())
  }, [])

  if (redirectPath !== null && redirectPath !== pathname) {
    return <Redirect to={redirectPath} />
  }

  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      <main
        css={css`
          height: calc(100vh - 60px);
          overflow-y: scroll;
        `}
      >
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/records">
            <Records />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>

      <Navbar />
    </div>
  )
}

export default App
