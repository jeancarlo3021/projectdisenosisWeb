import { useAuth } from './AuthProvider'

export function Home() {
  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout()
    //rediricionar
  }

  if (loading) return <h1>loading</h1>

  return (
    <div>
      <h1>Bienvenido {user.email}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
