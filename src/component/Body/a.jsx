import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getLinks, insertNewLink } from '../firebase'

const a = () => {
  const [urls, setUrls] = useState({
    title: '',
    url: '',
  })
  const [link, setLink] = useState([])

  function handleOnSubmit(e) {
    e.preventDefault()
    console.log(urls.title + urls.url)
    addlink()
  }

  const fetchBlogs = async () => {
    const reslinks = await getLinks()
    setLink([...reslinks])
  }
  useEffect(() => {
    fetchBlogs()
  }, [])

  //añadir nuevo elemnto
  const addlink = () => {
    if (urls.title !== '' && urls.url !== '') {
      const newlink = {
        id: uuidv4(),
        title: urls.title,
        url: urls.url,
        // se ingresa el id de la persona que lo ingreso
      }
      const res = insertNewLink(newlink)
      newlink.docId = res.id
      setUrls({
        title: '',
        url: '',
      })
      setLink([...res])
    }
  }

  const handleOnChange = ({ target: { name, value } }) => {
    setUrls({ ...urls, [name]: value })
  }

  return (
    <>
      <div>
        <h1>Dashboard</h1>

        <form action='' onSubmit={handleOnSubmit}>
          <label htmlFor='title'>Title </label>
          <input type='text' name='title' onChange={handleOnChange} />

          <label htmlFor='url'> Url </label>
          <input type='text' name='url' onChange={handleOnChange} />

          <button>Create new Link</button>
        </form>

        <div>
          <div>
            {link.map((link, i) => (
              <div key={i}>
                <a href={link.url}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default a
