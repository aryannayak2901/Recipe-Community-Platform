import React, { useState } from 'react';
import registerApi from '../../services/registerApi';
import '../../static/Signup/css/SignupStyle.css';

const SignupComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        registerApi.register(email, password, '', role)
            .then((response) => {
                setIsOtpSent(true);
                alert('OTP sent to your email!');
            })
            .catch((error) => {
                console.error(error);
                alert('Error during registration');
            });
    };

    const handleOtpVerification = (e) => {
        e.preventDefault();
    
        registerApi.verifyOtp(email, otp)
            .then((response) => {
                console.log('OTP verification successful:', response.data);
                setIsOtpVerified(true);
                alert('OTP verified! Registration complete.');
            })
            .catch((error) => {
                console.error('OTP verification error:', error.response ? error.response.data : error.message);
                alert('Invalid OTP');
            });
    };
    

    return (
        <section className="signup-section">
            <div className="container">
                <div className="signup-form-container">
                    <h2>Create an Account</h2>
                    {!isOtpSent ? (
                        <form id="signup-form" onSubmit={handleSubmit}>
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
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="contributor">Contributor</option>
                                </select>
                            </div>
                            <button type="submit" className="signup-btn">Sign Up</button>
                        </form>
                    ) : (
                        <form id="otp-form" onSubmit={handleOtpVerification}>
                            <div className="form-group">
                                <label htmlFor="otp">OTP</label>
                                <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    required
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="otp-btn">Verify OTP</button>
                        </form>
                    )}
                    <p className="login-link">
                        Already have an account? <a href="/login">Log in here</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignupComponent;
