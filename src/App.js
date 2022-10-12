import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Stateprovider from './context/Stateprovider'
import Privateroute from './components/Privateroute'
import Forgotpass from './components/Forgotpass'
import Updateprofile from './components/Updateprofile'

function App() {
  return (
    <BrowserRouter>
      <Stateprovider>
        <Routes>
          <Route exact path='/' element={<Privateroute><Dashboard /></Privateroute>} />
          <Route path='/updateprofile' element={<Privateroute><Updateprofile /></Privateroute>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpass' element={<Forgotpass />} />
        </Routes>
      </Stateprovider>
    </BrowserRouter>
  )
}

export default App
