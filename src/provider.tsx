import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AboutUs, Home } from './pages'
import { Auth } from './pages/auth'

function Provider() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
  )
}

export { Provider }
