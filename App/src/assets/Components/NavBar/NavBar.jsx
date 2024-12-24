import { Link } from 'react-router-dom'
import { useAuth } from '../../Database/AuthContext'
import Conta from '../Conta/Conta'
import './NavBar.css'

export default function Navbar() {
    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <>
        <div>
            <p>
            <Link to='/'>Dashboard</Link>
            </p>
            <button onClick={handleLogout}>Logout</button>
            <Conta />
        </div>
        </>
    )
}