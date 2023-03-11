import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import NewUser from './component/Login/newUser'
import { AuthProvider } from './component/Login/AuthProvider'
import { Home } from './component/Login/home'
import { ProtectedRoute } from './component/Login/Protected'
import A from './component/Body/a'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/a' element={<A />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
