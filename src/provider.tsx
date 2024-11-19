import { Routes as routesbyPath } from '@/const'
import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import { TooltipProvider } from './components'
import { UserProvider } from './context'
import { PublicationProvider } from './context/context-public'
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
      <TooltipProvider>
        <UserProvider>
          <PublicationProvider>
            <Toaster dir='ltr' />
            <Router>
              <Routes>
                <Route path={routesbyPath.Home} element={<Home />} />
                <Route path={routesbyPath.AboutUs} element={<AboutUs />} />
                <Route path={routesbyPath.Auth} element={<Auth />} />
              </Routes>
            </Router>
          </PublicationProvider>
        </UserProvider>
      </TooltipProvider>
    </>
  )
}

export { Provider }
