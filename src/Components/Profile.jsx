import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth'

const Profile = () => {
    const Auth = useAuth();
    const navigate = useNavigate()
    const handleLogout = function () {
        Auth.logout();
        navigate('/')
    }

    return (
        <div>
            <h1>welcome {Auth.user}</h1>
            <button type='button' onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Profile