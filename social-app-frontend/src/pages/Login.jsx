import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleFakeLogin = () => {
    // Fake user data
    const fakeUser = {
      id: '12345',
      name: 'Test User',
      email: 'test@example.com',
    };

    // Save to context
    login(fakeUser);

    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleFakeLogin}>Fake Login</button>
    </div>
  );
};

export default Login;
