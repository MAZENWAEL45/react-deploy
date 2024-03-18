import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {

    const navStyles = function ({ isActive }) {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const Auth = useAuth();
    return (
        <nav>
            <NavLink style={navStyles} to='/'>
                Home
            </NavLink>
            <NavLink style={navStyles} to='/profile'>
                Profile
            </NavLink>
            {Auth.user === null ? (
                <NavLink style={navStyles} to='/login'>
                    Login
                </NavLink>
            ) : null}
        </nav>
    )
}

export default Navbar