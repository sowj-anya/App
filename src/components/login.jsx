// import React, { useState } from 'react';
// import './log.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errors, setErrors] = useState({ email: '', password: '' });

//     const validateEmail = (email) => {
//         const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//         return re.test(String(email).toLowerCase());
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6; // example validation
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let valid = true;
//         let errors = {};

//         if (!validateEmail(email)) {
//             valid = false;
//             errors.email = 'Invalid email format';
//         }

//         if (!validatePassword(password)) {
//             valid = false;
//             errors.password = 'Password must be at least 6 characters long';
//         }

//         setErrors(errors);

//         if (valid) {
//             // Add form handling logic here
//             console.log('Form is valid, submitting:', { email, password });
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form action="" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="text"
//                         name="email"
//                         id="email"
//                         placeholder="Email*"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {errors.email && <p className="error">{errors.email}</p>}
//                 </div>
//                 <div>
//                     <label htmlFor="passw">Password</label>
//                     <input
                    
//                         type="password" 
//                         name="passw"
//                         id="passw"
//                         placeholder="Password*"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     {errors.password && <p className="error">{errors.password}</p>}
//                 </div>
//                 <button type="submit">Login</button>
//                 <button type="submit">SignUp</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
