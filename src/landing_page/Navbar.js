import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleDashboardClick = () => {
        if (token) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#FFF' }}>
                <div className="container p-2">
                    <Link className="navbar-brand" to="/">
                        <img src="media/images/logo.svg" style={{ width: '30%' }} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">
                                        Signup
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/product">
                                        Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/pricing">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/support">
                                        Support
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-link nav-link" onClick={handleDashboardClick}>
                                        Dashboard
                                    </button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;