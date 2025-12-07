import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simula login e vai para dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0056b3'}}>
      <div className="card" style={{width: '350px', textAlign: 'center'}}>
        <h2>VidaPlus Login</h2>
        <p style={{marginBottom: '20px', color: '#666'}}>Acesso ao Sistema SGHSS</p>
        <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <input type="email" placeholder="E-mail" style={{padding: '10px'}} required />
          <input type="password" placeholder="Senha" style={{padding: '10px'}} required />
          <button type="submit" className="btn-primary">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;