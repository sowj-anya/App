import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error messages
        setEmailError('');
        setPasswordError('');
        setFormError('');

        let hasError = false;

        // Validate email
        if (!email.includes('@gmail.com')) {
            setEmailError('Invalid email address.');
            hasError = true;
        }

        // Validate password
        if (password.length < 6) {
            setPasswordError('Invalid password.');
            hasError = true;
        }

        // Handle form errors if any
        if (!email || !password) {
            setFormError('Invalid input format.');
            hasError = true;
        }

        if (hasError) return;

        // Simulate successful login
        setMessageType('success');
        setMessage('Login successful!');
        
        // Clear form fields
        setEmail('');
        setPassword('');
        
        // Redirect to Home page after successful login
        setTimeout(() => {
            navigate('/');
        }, 1000); // Delay to allow the success message to be visible
    };

    // const handleLogin=async()=>{
    //     try{
    //         const response = await axios.get('http://localhost:5000/users', {
    //             params: {
    //                 email: email,
    //                 password: password
    //             }
    //         });
    //         const user = response.data[0];
    //         if(user){
    //             localStorage.setItem('user',Json.stringify(user))
    //             if(user.role === 'admin')
    //             {
    //                 navigate('/admin');
    //             }
    //             else{
    //                 navigate('/user');
    //             }
    //         }
    //         else{
    //             alert('Invalid Credentials');
    //         }
    //     }
    //     catch(error)
    //     {
    //         console.error('Login error:',error);
    //         alert('Login failed');
    //     }
    // }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
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

                <button type="submit">Login</button>

                {formError && <div className="error-message">{formError}</div>}
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';
// import { useAuth } from '../contexts/AuthContext';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [formError, setFormError] = useState('');
//     const [message, setMessage] = useState('');
//     const [messageType, setMessageType] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Reset error messages
//         setEmailError('');
//         setPasswordError('');
//         setFormError('');

//         let hasError = false;

//         // Validate email
//         if (!email.includes('@gmail.com')) {
//             setEmailError('Invalid email address.');
//             hasError = true;
//         }

//         // Validate password
//         if (password.length < 6) {
//             setPasswordError('Invalid password.');
//             hasError = true;
//         }

//         // Handle form errors if any
//         if (!email || !password) {
//             setFormError('Invalid input format.');
//             hasError = true;
//         }

//         if (hasError) return;

//         // Call the login function
//         handleLogin();
//     };

//     const handleLogin = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000', {
//                 params: {
//                     email: email,
//                     password: password
//                 }
//             });
//             const user = response.data[0];
//             if (user) {
//                 localStorage.setItem('user', JSON.stringify(user));
//                 login(user);
//                 if (user.role === 'admin') {
//                     navigate('/admin');
//                 } else {
//                     navigate('/user');
//                 }
//             } else {
//                 alert('Invalid Credentials');
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             alert('Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h1>Login</h1>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {emailError && <div className="error-message">{emailError}</div>}

//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {passwordError && <div className="error-message">{passwordError}</div>}

//                 <button type="submit">Login</button>

//                 {formError && <div className="error-message">{formError}</div>}
//                 {message && (
//                     <div className={`message ${messageType}`}>
//                         {message}
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default Login;
