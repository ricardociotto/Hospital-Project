import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Visão Geral</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px'}}>
        <div className="card"><h3>5</h3><p>Consultas Hoje</p></div>
        <div className="card"><h3>12</h3><p>Pacientes na Espera</p></div>
        <div className="card"><h3>98%</h3><p>Disponibilidade</p></div>
      </div>
    </div>
  );
};

export default Dashboard;