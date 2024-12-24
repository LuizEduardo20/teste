import { Link } from 'react-router-dom'
import './NavBar1.css'

export default function Navbar1(){
    return(
        <>
        <div className='conteinerNavbar1'>
            <p>
            <Link to='/login'>Login</Link>
            </p>
            <p>
            <Link to='/register'>Register</Link>
            </p>
        </div>
        </>
    )
}