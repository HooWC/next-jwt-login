import React from 'react';

export default function Logout() {
    const handleLogout = () => {
        // 删除本地存储的 token
        localStorage.removeItem('token');
        // alert('Logged out successfully!');
        window.location.href = '/';  // 跳转到登录页面
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handleLogout} className="logout-btn">
                Logout
            </button>
        </div>
    );
}
