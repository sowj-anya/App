import React, { useState } from 'react';
import '../payments/Payment.css'; // Optional: create this file for styling

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!cardNumber || !expiryDate || !cvv || !name) {
            setError('All fields are required.');
            return;
        }

        if (cvv.length !== 3) {
            setError('CVV must be 3 digits.');
            return;
        }

        setError('');
        setSuccess('Payment successful!');
        
        // Clear form fields
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
        setName('');

        // You can add further actions like API calls here
    };

    return (
        <div className="payment-container">
            <h1>Payment</h1>
            <form className="payment-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name on Card</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />

                <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                />

                <label htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />

                <button type="submit">Pay Now</button>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
            </form>
        </div>
    );
};

export default Payment;
