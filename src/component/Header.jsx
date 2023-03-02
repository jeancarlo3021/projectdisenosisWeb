import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Logo from './Logo'

const header = () => {
  return (
    <>
      <Routes>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <Logo className='navbar-brand'></Logo>
            <p>hola</p>
          </div>
        </nav>
      </Routes>
    </>
  )
}
