import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = { 'Project-ID': 'fb56194d-3f45-4aad-8ff0-d434b9dbc449', 'User-Name': username, 'User-Secret': password };
    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (err) {
      setError('Что-то пошло не так');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Чат приложение на React</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" plaseholder="User name" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" plaseholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Войти в чат</span>
            </button>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
