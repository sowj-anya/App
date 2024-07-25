import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HallsAvailable from './Halls/HallsAvailable';
import Payment from './payments/Payment';
function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/halls-available" element={<HallsAvailable />} />
                    <Route path="/payment" element={<Payment />} />

                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Login from './components/Login';
// import Register from './components/Register';
// import Contact from './components/Contact';
// import AdminDashboard from './components/AdminDashboard';
// import UserDashboard from './components/UserDashboard';
// import Footer from './components/Footer';
// import { AuthProvider } from './contexts/AuthContext';
// // import ProtectedRoute from './components/ProtectedRoute';


// function App() {
//     const App = () => {
//         const user = JSON.parse(localStorage.getItem('user'));
//     }
//     return (
//         <AuthProvider>
//             <Router>
//                 <div>
//                     <Navbar />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/contact" element={<Contact />} />

//                         {/* <Route path="/user" element = {user && user.role ==='user' ? <UserDashboard /> : <Navigate to = "/"/>}></Route>
//                         <Route path="/admin" element = {user && user.role ==='admin' ? <AdminDashboard /> : <Navigate to = "/"/>}></Route> */}

//                         <Route
//                             path="/admin"
//                             element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>}
//                         />
//                         <Route
//                             path="/user"
//                             element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>}
//                         />
//                     </Routes>
//                     <Footer />
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Login from './components/Login';
// import Register from './components/Register';
// import Contact from './components/Contact';
// import AdminDashboard from './components/AdminDashboard';
// import UserDashboard from './components/UserDashboard';
// import Footer from './components/Footer';
// import { AuthProvider, useAuth } from './contexts/AuthContext'; // Ensure useAuth is imported

// function App() {
//     return (
//         <AuthProvider>
//             <Router>
//                 <div>
//                     <Navbar />
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route path="/about" element={<About />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/contact" element={<Contact />} />
                        
//                         {/* Protected Routes */}
//                         <Route
//                             path="/admin"
//                             element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>}
//                         />
//                         <Route
//                             path="/user"
//                             element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>}
//                         />

//                     </Routes>
//                     <Footer />
//                 </div>
//             </Router>
//         </AuthProvider>
//     );
// }

// const ProtectedRoute = ({ children, role }) => {
//     const { user } = useAuth();

//     if (!user) {
//         // Redirect to login if not authenticated
//         return <Navigate to="/login" />;
//     }

//     if (user.role !== role) {
//         // Redirect to home if user does not have the correct role
//         return <Navigate to="/" />;
//     }

//     return children;
// };

// export default App;
