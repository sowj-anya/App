import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error messages
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setFormError('');

        let hasError = false;

        // Validate email
        if (!email.includes('@gmail.com')) {
            setEmailError('Invalid email address.');
            hasError = true;
        }

        // Validate password
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
            hasError = true;
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
            hasError = true;
        }

        // Handle form errors if any
        if (!email || !password || !confirmPassword) {
            setFormError('Invalid input format.');
            hasError = true;
        }

        if (hasError) return;

        // Simulate account existence check
        // In real application, check with backend if the email is already registered
        const accountExists = false; // Change this to true to simulate existing account

        if (accountExists) {
            setMessageType('error');
            setMessage('Account already exists. Please log in.');
        } else {
            // Simulate successful registration
            setMessageType('success');
            setMessage('Registration successful!');
            
            // Clear form fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            
            // Redirect to Login page after successful registration
            setTimeout(() => {
                navigate('/login');
            }, 1000); // Delay to allow the success message to be visible
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    // type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="error-message">{emailError}</div>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <div className="error-message">{passwordError}</div>}

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}

                <button type="submit">Register</button>

                {formError && <div className="error-message">{formError}</div>}
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
                {messageType === 'error' && (
                    <div className="login-link">
                        <p>Already have an account? <a href="/login">Login here</a></p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Register;
