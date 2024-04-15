import React, { useState } from 'react';
import Home from './Home'; // Import the Home component
import './Signin.css'; // Import the CSS file for styling

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false); // State to track authentication status

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        // Make a fetch request to check if the email and password exist in the API
        fetch('https://test-api-da2a0-default-rtdb.firebaseio.com/data.json')
            .then(response => response.json())
            .then(data => {
                // Check if the email and password exist in the fetched data
                const user = Object.values(data).find(user => user.email === email && user.password === password);
                if (user) {
                    // If user exists, set authenticated state to true
                    setAuthenticated(true);
                    alert('Sign in successful! Proceed to next component');
                } else {
                    // If user doesn't exist, show alert to sign up first
                    alert('User not found. Please sign up first.');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Render the Home component conditionally based on the authenticated state
    return (
        <div className="container">
            {authenticated ? <Home /> : (
                <form className="form" onSubmit={handleSignIn}>
                    <label>Email</label>
                    <input type='email' value={email} onChange={handleEmailChange} /> <br />
                    <label>Password</label>
                    <input type='password' value={password} onChange={handlePasswordChange} /> <br />
                    <input type='submit' value='Sign in' />
                </form>
            )}
        </div>
    );
};

export default Signin;
