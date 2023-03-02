import '../../styles/App.css'
import filter from '../../img/filter-alt-regular-24.png'

const names = () => {
  return (
    <>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-8 bold'>Nuestros productos</div>
          <div className='col-4 text-end bold'>
            Filtrar por
            <a href=''>
              <img className='filter' src={filter} alt='' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default names
