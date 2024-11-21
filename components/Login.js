import { useState } from 'react';
import axios from 'axios';

export default function Login({ switchToRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            // alert(response.data.message);
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        } catch (error) {
            alert('Login failed: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <p>
                Don't have an account?{' '}
                <span onClick={switchToRegister} style={{ color: '#007bff', cursor: 'pointer' }}>
                    Register here
                </span>
            </p>
        </form>
    );
}
