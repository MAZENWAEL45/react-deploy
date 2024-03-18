import { React, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const Login = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate()
    const Auth = useAuth();
    const location = useLocation();
    const redirectedPath = location.state?.path || '/';
    const handleLogin = function () {
        Auth.login(user);
        navigate(redirectedPath, { replace: true })
    }

    return (
        <div>
            <label htmlFor="input">User name:</label>
            <input
                type="text"
                name='username'
                id='input'
                placeholder='Enter your name'
                onChange={(e) => setUser(e.target.value)}
            />
            <button type='button' onClick={handleLogin}>login</button>
        </div>
    )
}

export default Login