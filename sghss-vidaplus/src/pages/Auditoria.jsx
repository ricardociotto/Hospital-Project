import React from 'react';
import { logsSistema } from '../data/mockData';
import { FaShieldAlt, FaLock } from 'react-icons/fa';

const Auditoria = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #6c757d', paddingBottom: '10px', marginBottom: '20px', color: '#333' }}>
        <FaShieldAlt /> Segurança e Auditoria (LGPD)
      </h2>
      
      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8f9fa', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>Data/Hora</th>
              <th>Usuário</th>
              <th>Ação Registrada</th>
              <th>IP de Origem</th>
            </tr>
          </thead>
          <tbody>
            {logsSistema.map((log) => (
              <tr key={log.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px' }}>{log.data}</td>
                <td><strong>{log.usuario}</strong></td>
                <td>{log.acao}</td>
                <td style={{ fontFamily: 'monospace' }}>{log.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaLock /> Todos os dados sensíveis são criptografados (AES-256) conforme normas da LGPD.
      </div>
    </div>
  );
};

export default Auditoria;