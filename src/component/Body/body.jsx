import React from 'react'
import 'bootstrap'
import Producto from './productos'
import Names from './names'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <>
      <Names />
      <Producto />
      <Link to={'/login'}>a</Link>
    </>
  )
}

export default Body
