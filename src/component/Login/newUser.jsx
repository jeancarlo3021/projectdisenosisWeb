import { useState } from 'react'
import { useAuth } from './AuthProvider'

const newUser = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()

  const { signup } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' placeholder='ejemplo@gmail.com' onChange={handleChange} />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' onChange={handleChange} />
      <button>Registrar</button>
    </form>
  )
}

export default newUser
