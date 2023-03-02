import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/App.css'

const filtro = () => {
  return (
    <>
      <div className='container text-center'>
        <div className='row mt-2'>
          <div className='col mt-3'>
            <button className='btn btn-info '>Novedades</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-info '>Promociones</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-info '>Más vendido</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-info '>Popular</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-info '>Recomendado</button>
          </div>
          <div className='col mt-3'>
            <button className='btn btn-info '>Combos</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default filtro
