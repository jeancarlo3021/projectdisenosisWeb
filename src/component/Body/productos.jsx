import API from '../axios/axios'
import prueva from '../../img/descarga.jpg'
import '../../styles/App.css'

const producto = () => {
  // const [post, setPost] = React.useState(null)

  // React.useEffect(() => {
  //   API.get('productis.json/').then((res) => {
  //     setPost(res.data)
  //   })
  // }, [])

  // if (!post) return null

  const style = {
    with: '14rem',
  }
  return (
    <>
      <div className='container'>
        <div className='row mt-4 me-5'>
          <div className='col col-sm-12 col-md-4'>
            <div className='card'>
              <img className='img-carta' src={prueva} alt='' />
              <div className='card-body'>
                <p className=''>Producto</p>
                <p className=''>Precio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default producto
