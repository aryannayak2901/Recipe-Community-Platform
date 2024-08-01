import React, { useState } from 'react';
import loginApi from '../../services/loginApi';
import '../../static/Login/css/LoginStyle.css';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginApi.login(email, password)
            .then((response) => {
                alert('Login successful!');
                // Redirect or perform any post-login actions here
            })
            .catch((error) => {
                console.error(error);
                alert('Invalid credentials');
            });
    };

    return (
        <section className="login-section">
            <div className="container">
                <div className="login-form-container">
                    <h2>Login</h2>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <p className="signup-link">
                        Don't have an account? <a href="/signup">Sign up here</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LoginComponent;
