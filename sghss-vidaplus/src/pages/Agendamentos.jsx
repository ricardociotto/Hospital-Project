import React, { useState } from 'react';
import { agendamentosIniciais } from '../data/mockData';
import { FaCalendarAlt, FaVideo, FaUserInjured, FaCheck, FaTimes, FaClock } from 'react-icons/fa';
import './Agendamentos.css'; // Vamos criar o CSS no próximo passo

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState(agendamentosIniciais);

  // Função simples para mudar status (Simulação)
  const alterarStatus = (id, novoStatus) => {
    const novosAgendamentos = agendamentos.map(ag => 
      ag.id === id ? { ...ag, status: novoStatus } : ag
    );
    setAgendamentos(novosAgendamentos);
  };

  return (
    <div className="agenda-container">
      <div className="page-header">
        <h2><FaCalendarAlt /> Agenda do Dia</h2>
        <div className="date-display">
          <span>Quarta-feira, 26 de Novembro</span>
        </div>
      </div>

      <div className="timeline">
        {agendamentos.map((item) => (
          <div key={item.id} className={`agenda-card status-${item.status.toLowerCase()}`}>
            
            {/* Coluna da Hora */}
            <div className="time-column">
              <span className="time">{item.hora}</span>
              <span className="status-label">{item.status}</span>
            </div>

            {/* Coluna de Detalhes */}
            <div className="info-column">
              <div className="patient-name">
                {item.paciente}
                {item.tipo === "Telemedicina" && (
                  <span className="badge-tele"><FaVideo /> Online</span>
                )}
              </div>
              <div className="appointment-reason">{item.motivo}</div>
              <div className="doctor-name">Profissional: {item.medico}</div>
            </div>

            {/* Coluna de Ações */}
            <div className="actions-column">
              {item.status === 'Pendente' && (
                <>
                  <button 
                    className="btn-action confirm" 
                    onClick={() => alterarStatus(item.id, 'Confirmado')}
                    title="Confirmar Presença">
                    <FaCheck />
                  </button>
                  <button 
                    className="btn-action cancel" 
                    onClick={() => alterarStatus(item.id, 'Cancelado')}
                    title="Cancelar">
                    <FaTimes />
                  </button>
                </>
              )}
              {item.status === 'Confirmado' && (
                <button 
                  className="btn-action finish" 
                  onClick={() => alterarStatus(item.id, 'Finalizado')}
                  title="Finalizar Atendimento">
                  <FaUserInjured /> Iniciar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agendamentos;