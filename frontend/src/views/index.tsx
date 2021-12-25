import { useEffect } from 'react'
import { Redirect, Switch, useLocation } from 'react-router'
import { css } from '@emotion/react'
import { Route } from 'react-router-dom'

import Auth from '#views/auth'
import Home from '#views/home'
import Navbar from '#components/Navbar'
import Records from '#views/records'
import Settings from '#views/settings'
import Stats from '#views/stats'
import { setRedirectPath } from '#models/common'
import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { getCurrentUserData } from '#models/user'
import { mediaQuery } from '#styles/media-queries'

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
          ${mediaQuery.below.sm} {
            height: calc(100vh - 50px);
          }
        `}
      >
        <Switch>
          <Route path="/auth">
            <Auth />
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
