import React, { useState } from 'react';
import { agendamentosIniciais } from '../data/mockData';
// Adicionei FaFileMedical para o ícone do prontuário
import { FaCalendarAlt, FaVideo, FaCheck, FaTimes, FaFileMedical } from 'react-icons/fa';
import ModalProntuario from '../components/ModalProntuario'; // Importação do novo componente
import './Agendamentos.css';

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState(agendamentosIniciais);
  
  // --- ESTADOS DO MODAL DE PRONTUÁRIO ---
  const [showProntuario, setShowProntuario] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] = useState("");

  // Função para alterar status do agendamento (Confirmar/Cancelar)
  const alterarStatus = (id, novoStatus) => {
    const novosAgendamentos = agendamentos.map(ag => 
      ag.id === id ? { ...ag, status: novoStatus } : ag
    );
    setAgendamentos(novosAgendamentos);
  };

  // Função que abre o Meet e muda status
  const iniciarAtendimento = (id) => {
    window.open('https://meet.google.com/new', '_blank');
    alterarStatus(id, 'Em Atendimento'); 
  };

  // --- NOVA FUNÇÃO: ABRIR PRONTUÁRIO ---
  const abrirProntuario = (nomePaciente) => {
    setPacienteSelecionado(nomePaciente);
    setShowProntuario(true);
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
              {/* Ações para agendamentos Pendentes */}
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

              {/* Ações para agendamentos Confirmados ou Em Atendimento */}
              {(item.status === 'Confirmado' || item.status === 'Em Atendimento') && (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                    className="btn-action finish" 
                    onClick={() => iniciarAtendimento(item.id)}
                    title="Iniciar Videochamada">
                    <FaVideo /> Iniciar Meet
                    </button>

                    {/* --- NOVO BOTÃO DE PRONTUÁRIO --- */}
                    <button 
                    className="btn-action" 
                    onClick={() => abrirProntuario(item.paciente)}
                    title="Abrir Prontuário e Prescrição"
                    style={{ backgroundColor: '#6c757d', color: 'white', display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                    <FaFileMedical /> Prontuário
                    </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- RENDERIZAÇÃO DO MODAL --- */}
      {showProntuario && (
        <ModalProntuario 
            onClose={() => setShowProntuario(false)} 
            pacienteNome={pacienteSelecionado} 
        />
      )}
    </div>
  );
};

export default Agendamentos;