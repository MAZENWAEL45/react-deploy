import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Profile from './Components/Profile';
import Login from './Components/Login';
import { ContextProvider } from './Components/Auth';
import RequireAuth from './Components/RequireAuth';

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/profile'
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ContextProvider>
    </Router>
  )
}

export default App