import NavBar from './assets/Components/NavBar/NavBar'
import NavBar1 from './assets/Components/NavBar/NavBar1'
import { useAuth } from './assets/Database/AuthContext'
import './App.css'

export default function App() {
  const { isAuthenticated } = useAuth()

  return (
    <>
      {isAuthenticated ? <NavBar /> : <NavBar1 />}
      <h1>Home</h1>
    </>
  )
}