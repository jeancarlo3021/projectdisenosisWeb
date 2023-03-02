import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../App.css'

const filtro = () => {
  return (
    <>
      <div className='container text-center'>
        <div className='row mt-2'>
          <div className='col mt-3'>
            <button className='btn btn-primary color w-'>Novedades</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-primary color'>Promociones</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-primary color'>Más vendido</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-primary color'>Popular</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-primary color'>Recomendado</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-primary color'>Combos</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default filtro
