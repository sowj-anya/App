import React from 'react';
import '../Halls/HallsAvailable.css'; // Create this file for styling if needed

const halls = [
    { id: 1, name: 'Conference Room A', capacity: 50 },
    { id: 2, name: 'Conference Room B', capacity: 100 },
    { id: 3, name: 'Auditorium', capacity: 300 },
];

const HallsAvailable = () => {
    return (
        <div className="halls-container">
            <h1>Halls Available</h1>
            <ul className="halls-list">
                {halls.map(hall => (
                    <li key={hall.id} className="hall-item">
                        <h2>{hall.name}</h2>
                        <p>Capacity: {hall.capacity} people</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HallsAvailable;
