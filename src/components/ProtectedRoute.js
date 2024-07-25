// // ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const ProtectedRoute = ({ children, role }) => {
//     const { user } = useAuth();

//     if (!user) {
//         return <Navigate to="/login" />;
//     }

//     if (user.role !== role) {
//         return <Navigate to="/" />;
//     }

//     return children;
// };

// export default ProtectedRoute;
// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
