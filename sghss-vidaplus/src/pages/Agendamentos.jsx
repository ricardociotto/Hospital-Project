import React, { useState } from 'react';
import { agendamentosIniciais } from '../data/mockData';
import { FaCalendarAlt, FaVideo, FaUserInjured, FaCheck, FaTimes } from 'react-icons/fa';
import './Agendamentos.css';

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState(agendamentosIniciais);

  const alterarStatus = (id, novoStatus) => {
    const novosAgendamentos = agendamentos.map(ag => 
      ag.id === id ? { ...ag, status: novoStatus } : ag
    );
    setAgendamentos(novosAgendamentos);
  };

  // NOVA FUNÇÃO: Abre o Meet e muda o status para "Em Andamento" (opcional)
  const iniciarAtendimento = (id) => {
    // Abre uma nova sala do Google Meet em outra aba
    window.open('https://meet.google.com/new', '_blank');
    
    // (Opcional) Muda visualmente para mostrar que iniciou
    alterarStatus(id, 'Em Atendimento'); 
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
          <div key={item.id} className={`agenda-card status-${item.status.toLowerCase().replace(" ", "-")}`}>
            
            <div className="time-column">
              <span className="time">{item.hora}</span>
              <span className="status-label">{item.status}</span>
            </div>

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

            <div className="actions-column">
              {item.status === 'Pendente' && (
                <>
                  <button className="btn-action confirm" onClick={() => alterarStatus(item.id, 'Confirmado')} title="Confirmar">
                    <FaCheck />
                  </button>
                  <button className="btn-action cancel" onClick={() => alterarStatus(item.id, 'Cancelado')} title="Cancelar">
                    <FaTimes />
                  </button>
                </>
              )}
              {/* Se estiver confirmado ou Em Atendimento, mostra o botão Iniciar */}
              {(item.status === 'Confirmado' || item.status === 'Em Atendimento') && (
                <button 
                  className="btn-action finish" 
                  onClick={() => iniciarAtendimento(item.id)}
                  title="Iniciar Videochamada">
                  <FaVideo /> Iniciar Meet
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