import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'

export const Router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/login', element: <Login/>},
    {path: '/register', element: <Register/>}
])