import { useState } from 'react';
import axios from 'axios';

export default function Register({ switchToLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
            // alert(response.data.message);
            switchToLogin(); // 注册成功后切换到登录页面
        } catch (error) {
            alert('Registration failed: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
            <p>
                Already have an account?{' '}
                <span onClick={switchToLogin} style={{ color: '#007bff', cursor: 'pointer' }}>
                    Login here
                </span>
            </p>
        </form>
    );
}
