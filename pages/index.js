import { useState, useEffect } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from './Dashboard';

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 检查是否存在 token
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);  // 如果存在 token，表示已登录
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          {isLogin ? (
            <Login switchToRegister={() => setIsLogin(false)} />
          ) : (
            <Register switchToLogin={() => setIsLogin(true)} />
          )}
        </>
      )}
    </div>
  );
}
