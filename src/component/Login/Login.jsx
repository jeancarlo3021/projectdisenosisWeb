import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function LoginView() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState()
  const { login, loginWithGoogle, resetPassword } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleGoogleSignin = async () => {
    await loginWithGoogle()
  }

  const handleResetPassword = async () => {
    try {
      await resetPassword()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' placeholder='ejemplo@gmail.com' onChange={handleChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' onChange={handleChange} />
        <button>Login</button>
        <a href='#!'>Forgot Password</a>
      </form>
    </div>
  )
}
