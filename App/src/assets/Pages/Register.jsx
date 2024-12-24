import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../assets/Database/AuthContext'
import './Styles/Register.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            login()
            navigate('/dashboard')
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="register-form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="register-form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='register-button'>Entrar</button>
            </form>
        </div>
    )
}