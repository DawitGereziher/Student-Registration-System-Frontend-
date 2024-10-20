import React, { useState } from 'react';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import './styles.css';
import axios from 'axios';

function App() {
  const [token, setToken] = useState(null);

  const handleLogout = () => {

    localStorage.removeItem('token');
    
    delete axios.defaults.headers.common['Authorization'];

    setToken(null);

   
  };


  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <Dashboard handleLogout={handleLogout}/>
;
}

export default App;
