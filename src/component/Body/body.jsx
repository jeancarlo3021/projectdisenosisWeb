import React from 'react'
import 'bootstrap'
import Filtro from './Filtro'
import Producto from './productos'
import Names from './names'

const Body = () => {
  return (
    <>
      <Filtro />
      <Names />
      <Producto />
    </>
  )
}

export default Body
