// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../UserLogin';
import Register from '../UserRegister';

const App = () => {
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token); // Store token in local storage
        // Redirect or perform actions after successful login
      } else {
        // Handle error response
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful registration
        console.log('Registration successful');
      } else {
        // Handle error response
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="../login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="../register">
            <Register handleRegister={handleRegister} />
          </Route>
          {/* Add additional routes or components as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
