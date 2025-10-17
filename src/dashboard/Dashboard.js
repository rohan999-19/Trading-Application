import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
        }
    }, [navigate, token]);

    if (!token) {
        return null;
    }

    const user = storedUser ? JSON.parse(storedUser) : null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/', { replace: true });
    };

    return (
        <div className="container mt-5">
            <h2>Welcome to Dashboard, {user?.name ?? 'Trader'}</h2>
            <p>You are logged in.</p>
            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;