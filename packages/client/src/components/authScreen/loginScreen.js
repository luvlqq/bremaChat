import './loginScreen.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';




const API_URL = 'http://localhost:4200/api';

function LoginScreen() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState(null);
    const { mutate, isLoading, isError, error } = useMutation(
        'login',
        async () => {
            const response = await axios.post(
                `${API_URL}/auth/login`,
                { login, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            return response.data;
        },
        {
            onSuccess: (data) => {
                setUser(data.user);
            },
        }
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        mutate();
    };

    return (
        <div className='login'>
            <div className='form'>
                <div className='text'> &#x1F47D; BremaChat </div>
                <div className='line'></div>

                <form className='login-form' onSubmit={handleFormSubmit}>
                    <div className='log'> Login</div>
                    <input
                        type='text'
                        required
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <div className='pass'>Password</div>
                    <input
                        type='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button disabled={isLoading}>Login</button>
                    {isError && <div className='error'>{error.message}</div>}
                </form>
                {user && (
                    <div className='success'>
                        Login successful. Welcome, {user.username}!
                    </div>
                )}
                <div className='register'>
                    Нет аккаунта? <a href="/register">Register</a>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
