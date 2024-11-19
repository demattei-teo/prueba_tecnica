import { Routes as routesbyPath } from '@/const'
import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import { UserProvider } from './context'
import { AboutUs, Home } from './pages'
import { Auth } from './pages/auth'
function Provider() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string)

    if (user && user.verify === 'verify' && window.location.pathname === routesbyPath.Auth)
      window.location.href = routesbyPath.Home

    if (!user && window.location.pathname !== routesbyPath.Auth) window.location.href = routesbyPath.Auth
  }, [])

  return (
    <>
      <UserProvider>
        <Toaster dir='ltr' />
        <Router>
          <Routes>
            <Route path={routesbyPath.Home} element={<Home />} />
            <Route path={routesbyPath.AboutUs} element={<AboutUs />} />
            <Route path={routesbyPath.Auth} element={<Auth />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export { Provider }
