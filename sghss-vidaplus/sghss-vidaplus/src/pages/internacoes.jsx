import React from 'react';
import { leitosIniciais } from '../data/mockData';
import { FaProcedures, FaExclamationTriangle } from 'react-icons/fa';

const Internacoes = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', marginBottom: '20px', color: '#333' }}>
        <FaProcedures /> Gestão de Leitos e Internações
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {leitosIniciais.map((leito) => (
          <div key={leito.id} className="card" style={{ 
            borderLeft: `5px solid ${leito.status === 'Livre' ? '#28a745' : leito.status === 'Ocupado' ? '#dc3545' : '#ffc107'}`,
            padding: '15px'
          }}>
            <h4>Leito {leito.id}</h4>
            <span style={{ fontSize: '0.9rem', color: '#666' }}>Setor: {leito.setor}</span>
            <div style={{ marginTop: '10px', fontWeight: 'bold', color: leito.status === 'Livre' ? '#28a745' : leito.status === 'Ocupado' ? '#dc3545' : '#ffc107' }}>
              {leito.status}
            </div>
            {leito.paciente && <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>👤 {leito.paciente}</p>}
          </div>
        ))}
      </div>

      {/* Simulação de Suprimentos (Bônus para o módulo ADM) */}
      <div style={{ marginTop: '40px' }}>
        <h3>📦 Controle de Suprimentos Críticos</h3>
        <div className="card" style={{ marginTop: '10px', padding: '15px', display: 'flex', gap: '20px', color: '#d9534f' }}>
          <FaExclamationTriangle /> 
          <span>Atenção: Estoque de <strong>Soro Fisiológico</strong> abaixo do mínimo (15%). Solicitar reposição.</span>
        </div>
      </div>
    </div>
  );
};

export default Internacoes;