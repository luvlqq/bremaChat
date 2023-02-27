import './registrationScreen.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';



const API_URL = 'http://localhost:4200/api';

function RegistrationScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [user, setUser] = useState(null);
    const { mutate, isLoading, isError, error } = useMutation(
        'register',
        async () => {
            const response = await axios.post(
                `${API_URL}/auth/register`,
                { username, password },
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
        if (password === passwordConfirm) {
            mutate();
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className='registration'>
            <div className='form'>
                <div className='text'> &#x1F47D; BremaChat </div>
                <div className='line'></div>


                <form className='register-form' onSubmit={handleFormSubmit}>
                    <div className='log'> Login </div>
                    <input
                        type='text'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className='pass'>Password</div>
                    <input
                        type='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='pass'>Confirm Password</div>
                    <input
                        type='password'
                        required
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <button disabled={isLoading}>Register</button>
                    {isError && <div className='error'>{error.message}</div>}
                </form>

                {user && (
                    <div className='success'>
                        Registration successful. Welcome, {user.username}!
                    </div>

                )}
                <div className='login'>
                    Есть аккаунт? <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
}

export default RegistrationScreen;
