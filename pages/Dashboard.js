import { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from '../components/Logout';

export default function Dashboard() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        // 如果没有 token，直接返回
        if (!token) {
            return;
        }

        // 发送请求获取用户数据
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);  // 假设返回的数据包含用户信息
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome, {userData.username}!</h1>
            <Logout />
        </div>
    );
}
